const jwt =require('jsonwebtoken');
const verifyToken=(req,res,next)=>{
    const token =req.header('Authorization');
    console.log(token);
    if(!token) return res.status(401).json({error : 'Access denied'});
        try{
            const decoded = jwt.verify(token,'your-secret-key');
            req.userId = decoded.userId;
            console.log(decoded);
            next();

        }
        catch(error){
         res.status(401).json({error:'Invalid token'});
        }
    };
module.exports = verifyToken;
