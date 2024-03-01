// import required library
const express =require("express");
const mongoose = require("mongoose");
const jwt =require("jsonwebtoken")
const multer =require('multer');
const userRouter =require("./routes/user");
const app =express();
const bodyparser =require("body-parser");
const jwtAptRouter = require('./routes/jwtApt')
const cors =require("cors")
app.use(cors());
app.use(express.json()) ;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))

app.use(userRouter)
app.use(jwtAptRouter)
 
const port = 8080;
// const PORT = process.env.PORT || 3006;
app.listen(port,()=>{
console.log(`server is listen at 8080  `);
});
mongoose.connect('mongodb://localhost:27017/test').then(()=>
{
  console.log("mongodb is connect")
}).catch((error)=>{
  console.log("mongodb is not connect",error)
})


