import React, { useState } from "react";
import axios from "axios";
import { isEmailValid, isPasswordValid } from "./validation";
import { toast } from "react-toastify";

const Login = ({ onClose, toggleModals,onAuthentication }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleLogin = async (e) => {
    const validationErrors = {};
    e.preventDefault();
    
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

    // Start the submission process
    setSubmitting(true);

    try {
      const response = await axios.post("/api/auth/login", { email, password });
      console.log("Logged in successfully!", response.data);

      // Show toast notification
      toast.success("Login successful!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      // Close the modal
      // onClose();
    onAuthentication();
      // Redirect or perform other actions on successful login
    } catch (error) {
      console.error("Login error:", error.response?.data);
    } finally {
      // Whether success or error, stop the submission process
      setSubmitting(false);
    }
  };
  return (
    <div className="modal-main">
      <div className="modal-title">
        <h4>Welcome Back</h4>
        <p>Please enter your details to sign in</p>
      </div>
      <div className="closeBtn" onClick={onClose}>
        <img src="/Images/closeIcon.svg" alt="" />
      </div>

      <form onSubmit={handleLogin}>
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

        <a id="forgot-password">Forgot Password?</a>

        <button type="submit">{submitting ? "Logging in..." : "Login"}</button>

        <p>
          Don’t have an account yet?{" "}
          <a onClick={toggleModals}> Create An Account</a>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
