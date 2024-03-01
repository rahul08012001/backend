const express = require('express');
const router = express.Router();
const jwtApi =require('../controller/jwtApi');
const middlewareJwt =require('../middleware/authMiddleware');
const multer=require('multer')
const path =require("path")
const User = require("../model/user")
const imagemiddleware =require('../middleware/imageUploade');

//const imageMiddleware=require('../middleware/imageUploade')
const {body,validationResult }=require('express-validator');
router.post("/addUser",jwtApi.Register)
router.post("/Login",jwtApi.createToken)
router.get("/verifyToken",middlewareJwt,jwtApi.getUser)
router.get("/getUser",jwtApi.getUser)
router.get("/getUser/:id",jwtApi.getUser)
router.get("/getall",jwtApi.getAll)
router.put('/update/:id',jwtApi.updateUser)
router.delete('/delete/:id',jwtApi.deleteUser)
router.post("/upload",imagemiddleware.single("image"),jwtApi.uploadImage);




module.exports =router;