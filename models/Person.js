const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  mobileNumber: { type: String, required: true, unique: true },
});

mongoose.model('Person', personSchema);