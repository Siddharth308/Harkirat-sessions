const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://prabhusid97:9777099605@cluster0.oucgkxv.mongodb.net/persons"
);
//how to create a new collection  and write to it
const app = express();
app.use(express.json());
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model("Person", personSchema);
app.get("/", function () {
  res.send({
    msg: "hello",
  });
});
app.post("/write-to-mongo", async (req, res) => {
  try {
    const { name, age } = req.body;
    const newPerson = new Person({ name, age });
    await newPerson.save();

    res.status(201).send("Person added successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(3000);
