//Load Env variables
require("dotenv").config();

// import dependencies
const express = require("express");
const connectToDb = require("./config/connectToDb");
const notesController = require('./controllers/notesController');
const cors = require("cors");
const usersController = require("./controllers/usersController");
const cookieParser = require('cookie-parser');
const requireAuth = require('./middleware/requireAuth');
const PORT = process.env.PORT || 8080;
//create an express app
const app = express();

// Configure express app
app.use(express.json()); // express as default can't read json data so we configure it to do so
app.use(cookieParser()); // enabling the cookieParser 
app.use(cors({
  origin: `${process.env.CLIENTURL}`,
  credentials: true,}));

// Connect to mongo database
connectToDb();

// ROUTING
// To signup // we are sending in email and password thats why its post
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
app.listen(PORT, () => {
  console.log(`app listening on port ${PORT} !`);
}); // we can access the environment variables by process.env.<variable name>
