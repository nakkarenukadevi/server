const express = require("express");
const Router = express.Router();
const StudentModel = require("../models/student");

Router.get("/students", async (req, res) => {
  try {
    const students = await StudentModel.find({});
    return res.send(students);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

Router.post("/students", async (req, res) => {
  try {
    const student = new StudentModel(req.body);
    await student.save();
    return res.send(student);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = Router;
