const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentController");


// create
router.post("/CreateData",studentController.createStudentList);

//Read 
router.get("/ReadData",studentController.ReadStudentList);

//Read By ID
router.get("/ReadByID/:id", studentController.ReadByID);

//Delete 
router.delete("/deleteData/:id", studentController.deleteStudentList);

//Update
router.post("/updateData/:id", studentController.updateStudentList);



module.exports=router;