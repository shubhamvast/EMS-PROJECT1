const mongoose = require("mongoose");
joi.objectid = require("joi-objectid");
const Schema = mongoose.Schema;

const peparquestionSchema = new Schema({
  pepar: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  serialNumber: {
    type: Number,
    required: true,
    min: 1,
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const Peparquestion = mongoose.model("peparquestion", peparquestionSchema);

const Joi = require("joi");

function validatePeparquestion(peparquestion) {
  const schema = Joi.object({
    pepar: Joi.ObjectId(),
    serialNumber: Joi.number().min(1).required(),
    question: Joi.ObjectId(),
  });

  return schema.validate(peparquestion);
}

module.exports = { Peparquestion, peparquestionSchema, validatePeparquestion };
