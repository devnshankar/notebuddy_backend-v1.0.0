//import dependencies
const mongoose = require("mongoose");


//Load Env variables
// we only need to load it once in the server file


//because it is using await we add async to this function
async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("connected to database");
  } catch (err) {
    console.log(err);
  }
}


//to the export the function
module.exports = connectToDb;