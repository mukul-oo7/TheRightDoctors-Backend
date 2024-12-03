const mongoose = require("mongoose");
require('dotenv').config();

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_CONNECTION_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDb;
