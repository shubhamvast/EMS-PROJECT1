const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    minLength: 3,
    maxLength: 50,
    required: true,
  },
  lastName: {
    type: String,
    minLength: 3,
    maxLength: 50,
    required: true,
  },
  email: {
    type: String,
    minLength: 5,
    maxLength: 255,
    required: true,
  },
  phone: {
    type: String,
    minLength: [10, "phone length must be 10"],
    maxLength: [10, "phone length must be 10"],

    required: true,
  },
  userName: {
    type: String,
    minLength: 5,
    maxLength: 255,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minLength: 5,
    maxLength: 1024,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});
