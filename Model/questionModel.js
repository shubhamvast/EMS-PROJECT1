const mongoose = require("mongoose");
const Schema = mongoose.Schema;
joi.objectid = require("joi-objectid");
const questionsSchema = new Schema({
  questionNumber: {
    type: Number,
    required: true,
    min: [1, "Atleast 1 question number enter"],
  },
  text: {
    type: String,
    required: true,
    minLength: [5, "Question text minimum 5 characters"],
  },
  topic: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    minLength: [5, "topic length atleast 5 characters"],
    maxLength: [50, "topic length atleast 50 characters"],
  },
  marks: {
    type: Number,
    min: [0, "Marks should not less than zero"],
    max: [100, "Marks should not greater than hundred"],
    required: true,
  },
  complexityLevel: {
    type: String,
    enum: {
      values: ["easy", "medium", "difficult"],
      message: "{value} value is not supported",
    },
    required: true,
  },
  correctOption: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});

const Topic = mongoose.model("topic", topicSchema);

const Joi = require("joi");
function validateTopic(topic) {
  const schema = Joi.object({
    questionNumber: Joi.number().required(),
    text: Joi.string().min(5).required(),
    topic: Joi.string().min(5).max(50).required(),
    marks: Joi.number().required(),
    complexityLevel: Joi.string().required(),
    correctOption: Joi.ObjectId(),
    isActive: Joi.boolean().required(),
  });

  return schema.validate(topic);
}

module.exports = { Topic, topicSchema, validateTopic };
