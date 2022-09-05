const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const {
  Subject,
  validateSubject,
  subjectSchema,
} = require("../Model/subjectsModel");

router.get("/", async (req, res) => {
  const subjects = await Subject.find();
  if (!subjects) return res.status(404).send("Subject not found.");
  res.send(subjects);
});

router.get("/:id", async (req, res) => {
  const subject = await Subject.findById(req.params.id);
  if (!subject) return res.status(404).send("Subject not found.");
  res.send(subject);
});
