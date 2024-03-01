const User = require("../model/user");
const {ObjectId}=require('bson');
const mongoose =require('mongoose');
//const bcryptjs =require("bcryptjs");
const Employee = require("../model/employee");

const addUser = async(req,res)=>{

    const user =new User({
        name:req.body?.name,
        email:req.body?.email,
       password:req.body.password ,
       mobile : req.body?.mobile,
      type : req.body?.type,
     


    });
    
    console.log(user)
      const user_data = await user.save();
      res.status(200).send({secuess:true,data: user_data})

  }


const addEmployee = async(req,res)=>{

  const user =new Employee({
     
    userId : req.body?.userId,
    employeeName : req.body?.employeeName,
    employeePhoneNo :req.body?. employeePhoneNo,
    // name:req.body?.name,
    //     email:req.body?.email,
    //    password:req.body.password ,
    //    mobile : req.body?.mobile,
    //   type : req.body?.type


  });
  
  console.log(user)
    const user_data = await user.save();
    res.status(200).send({secuess:true,data: user_data})

}


  const updateUser = async(req,res) => {
    let upid=req.params.id;
    console.log("upid",upid)
   let  upname=req.body.name;
    let upemail=req.body.email;
    let uppassword=req.body.password ;
     let  upmobile = req.body.mobile;
        
       let uptype = req.body.type;
  
  const resp =await User.findByIdAndUpdate({_id:upid},{$set:{name:upname,email:upemail,pasword:uppassword,mobile:upmobile,type:uptype}})
  console.log(resp);
  res.send(resp)
   }

   const readUser = async(req,res)=>{
    fetchid=req.params.id
    const response= await User.find({_id:fetchid})
    console.log(response)
    res.send(response)


 
}

const readEmployee =async (req, res) => {
  
  fetchid=req.params.id
  const employee = await Employee.find({_id:fetchid});
  console.log(employee)
  res.send(employee);
}
const readEmployeeAndUser =async(req,res) =>{
  const employee = await Employee.find().populate("userId");
  console.log(employee)
  res.send(employee);
}
  



const resgetAll =async(req,res)=>{
  const resp =await User.find({})
  console.log(resp)
  res.send(resp)
}
const deleteUser = async(req,res)=>{
  delid=req.params.id
   const resdel=await User.findByIdAndDelete({_id:delid}) 
       console.log(resdel)
       res.send(resdel)
   }
// const resGetAll 


  module.exports={addUser,addEmployee,updateUser,readUser,deleteUser,resgetAll,readEmployee,readEmployeeAndUser};


  