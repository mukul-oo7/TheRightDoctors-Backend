const { Router } = require("express");
const mongoose = require("mongoose");

const Person = mongoose.model("Person");

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const people = await Person.find();
    res.json(people);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const person = await Person.create({
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      mobileNumber: req.body.mobileNumber,
    });

    res.status(201).send({ id: person._id });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) {
      return res.status(404).json({ message: "Person not found" });
    }

    person.name = req.body.name || person.name;
    person.age = req.body.age || person.age;
    person.gender = req.body.gender || person.gender;
    person.mobileNumber = req.body.mobileNumber || person.mobileNumber;

    const updatedPerson = await person.save();
    res.send(updatedPerson);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const person = await Person.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Successfull Delete"})
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;