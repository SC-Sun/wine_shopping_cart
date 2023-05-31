require('dotenv').config({path: '../.env'});
const mongoose = require("mongoose");


const connectDB = async () => {
  try {
   await mongoose.connect( process.env.MONGO_URI , {
   useUnifiedTopology: true,
    useNewUrlParser: true,
    });
    console.log("MongoDB connection SUCCESS!");
  } catch (error) {
    console.log(error);
    console.error("MongoDB conneciton FAIL!");
    process.exit(1);
  }
};

module.exports = connectDB;
