const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Check if user info is empty
  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  // Check if name length is at least 2, but no greater than 30
  if(!Validator.isLength(data.name, { min: 2, max: 30})) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  // Check is name is empty
  if(Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  // Check if input is an email
  if(!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  // Check if email is empty
  if(Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  // Check if password is at least 6, but not greater than 30
  if(!Validator.isLength(data.password, {min: 6, max: 30})) {
    errors.password = 'Password must be at least 6 characters';
  }

  // Check if password is empty
  if(Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }  

  // Check if confirmation password is empty
  if(Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm password field is required';
  }

  // Check is confirmation password is the same as the first password
  if(!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }

  // Return errors if any
  return {
    errors,
    isValid: isEmpty(errors)
  };
};