//import dependencies
const mongoose = require("mongoose");

//creating schema
const noteSchema = new mongoose.Schema({
  title: String,
  body: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

//creating model
const Note = mongoose.model("Note", noteSchema);

//exporting the model
module.exports = Note;
