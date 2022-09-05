const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subjectSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, "subject's minimum length 3 characters"],
    maxLength: [50, "subject's minimum length 50 characters "],
  },
});

const Subject = mongoose.model("subject", subjectSchema);
const Joi = require("joi");

function validateSubject(subject) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
  });

  return schema.validate(subject);
}

module.exports = { Subject, subjectSchema, validateSubject };
