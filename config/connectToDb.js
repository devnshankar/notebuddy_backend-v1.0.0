//import dependencies
const mongoose = require("mongoose");


//Load Env variables
if(process.env.NODE_ENV != "production"){  //this if statement makes sure if the server runs lcally then it uses the env vars otherwise in production it won't
  require("dotenv").config();
}


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