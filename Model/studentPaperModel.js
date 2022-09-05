const mongoose = require("mongoose");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const studentPaperSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  paper: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  status: {
    type: String,
    enum: {
      values: ["assigned", "inProgress", "submitted", "checked"],
      message: "{values} is not allowed",
    },
    required: true,
  },
  totalAttempt: {
    type: Number,
    required: true,
    min: [0, "attempt should be positive"],
    default: 0,
  },
  totalCorrect: {
    type: Number,
    min: [0, "totalCorrect should be positive"],
    required: true,
  },
  obtainMarks: {
    type: Number,
    min: [0, "obtainMarks should be positive"],
    required: true,
  },
});

const StudentPaper = mongoose.model("studentPaper", studentPaperSchema);

function validateStudentPaper(studentPaper) {
  const schema = new Joi.object({
    student: Joi.objectid().required(),
    paper: Joi.objectid().required(),
    status: Joi.String().required(),
    totalAttempt: Joi.number().required(),
    totalCorrect: Joi.number().required(),
    obtainMarks: Joi.number().required(),
  });

  return schema.validate(studentPaper);
}

module.exports = { StudentPaper, studentPaperSchema, validateStudentPaper };
