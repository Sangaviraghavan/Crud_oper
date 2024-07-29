const mongoose = require("mongoose");

const { Schema } = mongoose;

const blogSchema = new Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  passwd: {
    type: String,
    required: true
  },
 
});

module.exports = mongoose.model("datas", blogSchema);
