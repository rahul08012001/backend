const User = require('../model/user');
const mongoose =require('mongoose');
const bcrypt =require('bcrypt');
const jwt =require('jsonwebtoken');
//const Validator=require('validator');
//const verifyToken = require('verifyToken');
// const middleware =require('../middleware/authMiddleware');
// const multer =require('multer')
// const imageUploade=require('../middleware/imageUploade');
const Register =async(req,res)=>{
    const user =new User({
     
    name:req.body?.name,
    email:req.body?.email,
    password:req.body?.password,
    mobile:req.body?.mobile,
    type:req.body?.type

   
    
    })

    const email=req.body.email;
    const exist =await User.findOne({ email})
        if(exist){
            console.log("Email is already exist")
            return res.status(401).json({
                status: 401,
                message:"Email is already exist",
                data:null
            }) 
        }
        
   

 
    console.log(user);
  const data_user=await user.save();

return res.status(200).json({
    status: 200,
    data_user
})

}




const createToken = async (req, res) => {
    try {
    const {email, password } = req.body;
   // console.log('req.body',req.body);
    const user = await User.findOne({ email : email});
   
    if (!user) {
    return res.status(404).json({ error: 'User Not Found ' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
   console.log('Passowrodbjasd', passwordMatch);

    if (!passwordMatch) {
    return res.status(404).json({ error: 'Passowrd is incorrect' });
    }
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
    expiresIn: '20s',
    });
    res.status(200).json({ 
        status : 200 , 
        message : "User login!",
        data : user,
        token : token
     });
    } catch (error) {
    res.status(500).json({ 
        status:500,
        error: 'Login failed' + error.message,
        data:null
    });
    }
    }

    const getUser=async(req,res)=>
    {
        const userId =  req.params.id;
        console.log("----",userId);
        const user= await User.findById(userId)
        
            res.send(user);
        console.log( user)


    }

    const getAll =async(req,res)=>{
        const resp =await User.find({})
        console.log(resp)
        res.send(resp)
      }
    const updateUser = async(req,res) => {
   let upid=req.params.id;
      
     //   let  upid=req.body.id;
        console.log("upid",upid)
       let  upname=req.body.name;
        let upemail=req.body.email;
        let uppassword=req.body.password ;
         let  upmobile = req.body.mobile;
            
           let uptype = req.body.type;
      
      const resp =await User.findOneAndUpdate({id:upid},{$set:{name:upname,email:upemail,pasword:uppassword,mobile:upmobile,type:uptype}})
      console.log(resp);
      res.send(resp)
       }
       
    const deleteUser = async(req,res)=>{
        delid=req.params.id
         const resdel=await User.findByIdAndDelete({_id:delid}) 
             console.log(resdel)
            return res.json({
                status:200,
                message:"deleteb suvccesfully",
            data:null })
            }
 const uploadImage = async (req, res) => {
       try {
     // Check if a file was uploaded
          if (!req.file) {
              return res.status(400).json({ 
                status:400,
                error: 'No file uploaded' ,
                data:'null'
            });
          }
              
     // Create a new User instance with uploaded file data
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                mobile: req.body.mobile,
                type: req.body.type,
                image: req.file.originalname,
            });
              
    // Save the user to the database
            await user.save();
              
    // Respond with success message and user data
           return res.json({
                status: 200,
                message: 'Image uploaded successfully',
                data: user
            });
            
            } catch (error) {
                console.error('Error uploading file:');
               return res.json({ 
                    status:500,
                    error: 'Internal server error',
                    data:null});
            }
              };
        
 module.exports ={Register,createToken,getUser,getAll,updateUser,deleteUser,uploadImage};




