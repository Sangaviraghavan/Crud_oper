const mongoose = require('mongoose');

const schema = require("../module/schema.js");

const createTask = async (req, res) => {
  const { fname, lname, email, phone, passwd } = req.body;

  try {
    const task = await schema.create({ fname, lname, email, phone, passwd,  });

    res.status(200).json({
      status: 200,
      msg: "Created task"
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      status: 500,
      msg: "Error creating task"
    });
  }
};

//get method 

const getTask = async (req, res) => {
  try {
    const task = await schema.find({});

    res.status(200).json({
      status: 200,
      msg: "Tasks retrieved successfully",
      data: task
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      status: 500,
      msg: "Error getting tasks"
    });
  }
};

//getting id  method

const getingtask = async (req, res) => {
  const id = req.params.id;

 

  try {
    const object = await schema.findById(id);
    
    res.status(200).json({
      message: 'Success',
      data: object,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error fetching object by ID',
      error: error.message,
    });
  }
};

//update object:

const updateTask = async (req, res) => {
  const id = req.params.id;

  try {
    const object = await schema.findByIdAndUpdate(
      id,
      req.body, 
      { new: true }
    );

    res.status(200).json({
      message: 'Success',
      data: object,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error updating object by ID',
      error: error.message,
    });
  }
};

// Delete method 

const deletepost = async (req,res)=>{
  const id = req.params.id;


  try{
    const object = await schema.findByIdAndDelete(id);
   
    res.status(200).json({
      status: 'OK',
      msg:"succfully deleted"
    })

  }catch(error){
    console.log(error);
    res.status(400).json({
      status: 'Bad Request',
      msg:"NOt  deleted"
    })

  }
}


module.exports = {
    createTask,
    getTask,
    getingtask,
    updateTask,
    deletepost
  };
