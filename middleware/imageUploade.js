const path =require("path")
const multer=require("multer")
const storage=multer.diskStorage({
    destination:(req,file,cd)=>{
        cd(null,'./upload/images');
//console.log(storage)
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        file.originalname = uniqueSuffix + ext
        cb(null,file.originalname);
        }
      })
      
    const upload = multer({ storage: storage })

    
module.exports=upload;