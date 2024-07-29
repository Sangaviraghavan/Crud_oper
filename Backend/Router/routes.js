const express = require("express");
const router = express.Router();

const { createTask, getTask, getingtask,updateTask,deletepost } = require("../TaskControler/control.js");

router.post("/api/post", createTask);
router.get("/api/get", getTask);
router.get("/api/:id", getingtask);
router.put("/api/:id", updateTask);
router.delete("/api/:id", deletepost);



module.exports = router;
