//import dependencies
const mongoose = require("mongoose");

//creating schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    imdex: true,
  },
  password: {
    type: String,
    required: true,
  },
  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Note" }],
});

//creating model
const User = mongoose.model("User", userSchema);

//exporting the model
module.exports = User;
