//import dependencies
const mongoose = require("mongoose");

//creating schema
const noteSchema = new mongoose.Schema({
  title: String,
  body: String,
});

//creating model
const Note = mongoose.model('Note', noteSchema);

//exporting the model
module.exports =  Note;