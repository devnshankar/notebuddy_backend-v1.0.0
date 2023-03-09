// import dependencies
const Note = require("../models/note");

// Function to fetch all notes available in the database
const fetchNotes = async (req, res) => {
  // Find the notes
  const notes = await Note.find({ user: req.user._id });

  // Respond with them
  res.json({ notes }); //if the key and value match notes: notes, shortened
};

// Function to fetch a note by id
const fetchNote = async (req, res) => {
  try {
    // Get the id off the url
    const noteId = req.params.id;

    // Find the ntoe using that id
    const note = await Note.findOne({ _id: noteId, user: req.user._id });

    // Respond with the note
    res.json({ note });
  } catch(err) {
      console.log(err);
      res.sendStatus(400);
  }
  
};

// Function to create a note in the database
const createNote = async (req, res) => {
  try {
    // post is used when we are creating data, it can also accept data via the request body, also we made it an async function because it takes time to do perform the action
    // get the sent in data off request body
    const { title, body } = req.body; // same as const title = req.body.title; const body = req.body.body;

    // create a note with it
    const note = await Note.create({
      title,
      body,
      user: req.user._id,
    });

    //respond with the new note
    res.json({ note });
  } catch(err) {
      console.log(err);
      res.sendStatus(400);
  }
};

// Function to update a note by id
const updateNote = async (req, res) => {
  try {
    // Get the id off the url
    const noteId = req.params.id;

    // Get the data off the request body
    const { title, body } = req.body;

    // Find and update the record
    await Note.findOneAndUpdate(
      { _id: noteId, user: req.user._id },
      {
        title,
        body,
      }
    );

    // Find the updated note from db
    const note = await Note.findById(noteId);

    // Respond with it
    res.json({ note });
  } catch(err) {
      console.log(err);
      res.sendStatus(400);
  }
};

// Function to delte a note by id
const deleteNote = async (req, res) => {
  try {
  // Get the id off url
    const noteId = req.params.id;

    // Delete the record
    await Note.deleteOne({ _id: noteId, user: req.user._id }); // note that the _id attribute must be same as defined in the database itself otherwise doesn't delete

    // Respond with it
    res.json({ success: "Record deleted" });
  } catch(err) {
      console.log(err);
      res.sendStatus(400);
  }
};

// exporting the functions inside an object
module.exports = {
  fetchNotes,
  fetchNote,
  createNote,
  updateNote,
  deleteNote,
};
