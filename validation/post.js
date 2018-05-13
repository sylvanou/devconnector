const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  // Check if user info is empty
  data.text = !isEmpty(data.text) ? data.text : "";

  // Check if password is at least 10, but not greater than 300
  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = "Text must be at least 6 characters";
  }

  // Return errors if any
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
