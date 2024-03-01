const express = require('express');
const router  = express.Router();
const userController = require('../controller/userController')

router.post("/add",userController.addUser)
router.post("/addEmployee",userController.addEmployee)
router.put('/update/:id',userController.updateUser)
router.get('/fetch/:id',userController.readUser)
// router.delete('/delete/:id',userController.deleteUser)
router.get('/fetch',userController.resgetAll)
//router.get('/fetch/allData/:id',userController.readEmployee)
router.get('/fetch/allUserAndEmployee/:id',userController.readEmployeeAndUser)

module.exports = router;


