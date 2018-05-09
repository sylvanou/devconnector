const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  // Check if user info is empty
  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  // Check if title is empty
  if (Validator.isEmpty(data.title)) {
    errors.title = "Job title field is required";
  }
  // Check if title is empty
  if (Validator.isEmpty(data.company)) {
    errors.company = "Company field is required";
  }
  // Check if title is empty
  if (Validator.isEmpty(data.from)) {
    errors.from = "From date field is required";
  }

  // Return errors if any
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
