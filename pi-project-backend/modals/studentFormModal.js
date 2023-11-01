const mongoose = require("mongoose");

const { Schema } = mongoose;

const studentResponseSchema = Schema({
  userId: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  number: {
    required: false,
    type: String,
  },
  file: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("studentResponses", studentResponseSchema);
