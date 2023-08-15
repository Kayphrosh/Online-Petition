import validator from "validator";

// Validate email format
export const isEmailValid = (email) => {
  return validator.isEmail(email);
};

// Validate password length (minimum length)
export const isPasswordValid = (password) => {
  return password.length >= 6; // Change the minimum length as needed
};
