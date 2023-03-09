//Load Env variables
if (process.env.NODE_ENV != "production") {
  //this if statement makes sure if the server runs lcally then it uses the env vars otherwise in production it won't
  require("dotenv").config();
}

// import dependencies
const express = require("express");
const connectToDb = require("./config/connectToDb");
const notesController = require('./controllers/notesController');
const cors = require("cors");
const usersController = require("./controllers/usersController");
const cookieParser = require('cookie-parser');
const requireAuth = require('./middleware/requireAuth');

//create an express app
const app = express();

// Configure express app
app.use(express.json()); // express as default can't read json data so we configure it to do so
app.use(cookieParser()); // enabling the cookieParser 
app.use(cors({
  origin: true,
  credentials: true,
}));

// Connect to mongo database
connectToDb();

// ROUTING
// To signup // we are senging in email and password thats why its post
app.post('/signup', usersController.signup);
// To login
app.post("/login", usersController.login);
// To Logout
app.get("/logout", usersController.logout);
// To authenticate
app.get("/check-auth", requireAuth, usersController.checkAuth);

// To fetch all the notes
app.get("/notes", requireAuth, notesController.fetchNotes);
// To fetch one note by id
app.get('/notes/:id', requireAuth, notesController.fetchNote);
// To post a note
app.post("/notes", requireAuth, notesController.createNote);
// To update a note by id
app.put('/notes/:id', requireAuth, notesController.updateNote);
// To delete a note by id
app.delete('/notes/:id', requireAuth, notesController.deleteNote);

// start the server with port
app.listen(process.env.PORT); // we can access the environment variables by process.env.<variable name>