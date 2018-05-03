const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Check if user info is empty
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // Check if email is empty
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  // Check if input is an email
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // Check if password is empty
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  // Check if password is at least 6, but not greater than 30
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  // Return errors if any
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
