const mongoose = require("mongoose");
const Schema = mongoose.Schema;
joi.objectid = require("joi-objectid");
const studentanswerSchema = new Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  peparquestion: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  isCorrect: {
    type: Boolean,
    required: true,
  },
});

const Studentanswer = mongoose.model("studentanswer", studentanswerSchema);
const Joi = require("joi");
const joiObjectid = require("joi-objectid");

function validateStudentanswer(studentanswer) {
  const schema = Joi.object({
    student: Joi.ObjectId(),
    peparquestion: Joi.ObjectId(),
    answer: Joi.string().required(),
    isCorrect: Joi.boolean().required(),
  });
  return schema.validate(studentanswer);
}

module.exports = { Studentanswer, studentanswerSchema, validateStudentanswer };
