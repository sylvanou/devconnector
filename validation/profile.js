const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  // Check if user info is empty
  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skilss = !isEmpty(data.skilss) ? data.skilss : "";

  if(!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = 'Handle needs to be between 2 and 40 characters';
  }

  if(Validator.isEmpty(data.handle)) {
    errors.handle = 'Profile handle is required';
  }
  
  if(Validator.isEmpty(data.status)) {
    errors.status = 'Status field is required';
  }
  
  if(Validator.isEmpty(data.skills)) {
    errors.skills = 'Status field is required';
  }
  
  if(Validator.isEmpty(data.website)) {
    if(!Validator.isUrl(data.website)) {
      errors.website = 'Not a valid URL';
    }
  }
  
  if(Validator.isEmpty(data.youtube)) {
    if(!Validator.isUrl(data.youtube)) {
      errors.youtube = 'Not a valid URL';
    }
  }
  
  if(Validator.isEmpty(data.twitter)) {
    if(!Validator.isUrl(data.twitter)) {
      errors.twitter = 'Not a valid URL';
    }
  }
  
  if(Validator.isEmpty(data.facebook)) {
    if(!Validator.isUrl(data.facebook)) {
      errors.facebook = 'Not a valid URL';
    }
  }
  
  if(Validator.isEmpty(data.linkedin)) {
    if(!Validator.isUrl(data.linkedin)) {
      errors.linkedin = 'Not a valid URL';
    }
  }
  
  if(Validator.isEmpty(data.instagram)) {
    if(!Validator.isUrl(data.instagram)) {
      errors.instagram = 'Not a valid URL';
    }
  }

  // Return errors if any
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
