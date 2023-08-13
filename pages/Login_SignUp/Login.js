import React from "react";

const Login = ({ onLoginClose }) => {
  const handleLoginOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onLoginClose();
    }
  };
  return (
    <div className="signup-container">
      <div className="modal-main">
        <div className="modal-title">
          <h4>Welcome Back</h4>
          <p>Please enter your details to sign in</p>
        </div>
        <div className="closeBtn" onClick={onLoginClose}>
          <img src="/Images/closeIcon.svg" alt="" />
        </div>

        <form>
          <span>
            <label>Email</label>
            <input type="text" placeholder="Enter your email address" />
          </span>

          <span>
            <label>Password</label>
            <input type="text" placeholder="******" />
          </span>

          <a id="forgot-password">Forgot Password?</a>

          <button type="submit">Submit</button>

          <p>
            {" "}
            Already have an account yet? <a href="">Login</a>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
