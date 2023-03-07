//Load Env variables
if (process.env.NODE_ENV != "production") {
  //this if statement makes sure if the server runs lcally then it uses the env vars otherwise in production it won't
  require("dotenv").config();
}

// import dependencies
const express = require("express");
const connectToDb = require("./config/connectToDb");
const notesController = require('./controllers/notesController');

//create an express app
const app = express();

// Configure express app
app.use(express.json()); //express as default can't read json data so we configure it to do so

// Connect to mongo database
connectToDb();

// routing
// To fetch all the notes
app.get("/notes", notesController.fetchNotes);
// To fetch one note by id
app.get('/notes/:id', notesController.fetchNote);
// To post a note
app.post("/notes", notesController.createNote);
// To update a note by id
app.put('/notes/:id', notesController.updateNote);
// To delete a note by id
app.delete('/notes/:id', notesController.deleteNote);

// start the server with port
app.listen(process.env.PORT); // we can access the environment variables by process.env.<variable name>
