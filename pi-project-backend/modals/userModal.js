const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = Schema({
  email: {
    required: true,
    unique: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  userType: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("user", userSchema);
