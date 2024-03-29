const mongoose=require('mongoose');

const bcrypt=require('bcrypt');

const userSchema=new mongoose.Schema({

name:{
    type:String,
 //   required:true,
    
},
email:{
    type:String,
    //required:true,
   
   
},
password:{
    type:String,
  //  required:true,
},

mobile:{
    type:Number,
    
},
type:{
    type:String,
   
},
image:{
    type:String,
   // required:true
}

})


userSchema.pre('save', function(next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function(err, salt) {
            if (err) {

                return next(err);
            }
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});


module.exports = mongoose.model("User",userSchema);

