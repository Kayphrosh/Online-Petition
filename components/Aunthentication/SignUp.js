import React, { useState } from "react";
import axios from "axios";
import { isEmailValid, isPasswordValid } from "./validation";
import { toast } from "react-toastify";

const SignUp = ({ onClose, toggleModals }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!isEmailValid(email)) {
      validationErrors.email = "Invalid email format";
    }

    if (!isPasswordValid(password)) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitting(true);

    try {
      const response = await axios.post("/api/auth/signup", {
        email,
        password,
        first_name,
        last_name,
      });
      console.log("Account created successfully!", response.data);

      // Show toast notification
      toast.success("Sign Up successful!", {
        position: toast.POSITION.TOP_RIGHT,
      });

      
      // Close the modal
      onClose();
      // Redirect or perform other actions on successful signup
    } catch (error) {
      console.error("Signup error:", error.response?.data);
      
    } finally {
      // Whether success or error, stop the submission process
      setSubmitting(false);
    }
  };
  return (
    <div className="modal-main">
      <div className="modal-title">
        <h4>Create An Account</h4>
        <p>Please enter your details to sign up</p>
      </div>
      <div className="closeBtn" onClick={onClose}>
        <img src="/Images/closeIcon.svg" alt="" />
      </div>

      <form onSubmit={handleSignup}>
        <div className="fullName">
          <span>
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.first_name && (
              <div className="error">{errors.first_name}</div>
            )}
          </span>
          <span>
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.last_name && (
              <div className="error">{errors.last_name}</div>
            )}
          </span>
        </div>

        <span>
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </span>

        <span>
          <label>Password</label>
          <input
            type="password"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </span>
        <button type="submit">{submitting ? "signing up..." : "Sign Up"}</button>

        <p>
          Already have an account yet? <a onClick={toggleModals}> Login</a>{" "}
        </p>
      </form>
    </div>
  );
};

export default SignUp;
