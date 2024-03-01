const mongoose=require('mongoose');
//const user=require('user');

const employeeSchema=new mongoose.Schema({
    
    
    employeeName:{
        type:String,
        
    },
    employeePhoneNo:{
        type:String,
       
       
    },
   
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})
     //const User = mongoose.model('User', userSchema);
     
     module.exports = mongoose.model("Employee",employeeSchema);
