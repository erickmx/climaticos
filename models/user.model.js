const mongoose = require("mongoose");

/**
 * evaluates if the email field is valid befora insert it
 * @param {string} email
 */
const emailValidate = email =>
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
    email
  );

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "firstName is required"]
  },
  lastName: {
    type: String,
    required: [true, "firstName is required"]
  },
  email: {
    type: String,
    validate: emailValidate,
    required: [true, "email is required"],
    unique: [true, "email must be unique"]
  },
  password: {
    type: String,
    required: [true, "password is required"]
  },
  role: {
    type: String,
    default: "client"
  }
});

module.exports = mongoose.model("User", userSchema);
