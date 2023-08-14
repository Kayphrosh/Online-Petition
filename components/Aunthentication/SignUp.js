import React from "react";

const SignUp = ({ onClose, toggleModals }) => {
  return (
    <div className="modal-main">
      <div className="modal-title">
        <h4>Create An Account</h4>
        <p>Please enter your details to sign up</p>
      </div>
      <div className="closeBtn" onClick={onClose}>
        <img src="/Images/closeIcon.svg" alt="" />
      </div>

      <form>
        <div className="fullName">
          <span>
            <label>First Name</label>
            <input type="text" placeholder="Enter your first name" />
          </span>
          <span>
            <label>Last Name</label>
            <input type="text" placeholder="Enter your last name" />
          </span>
        </div>

        <span>
          <label>Email</label>
          <input type="text" placeholder="Enter your email address" />
        </span>

        <span>
          <label>Password</label>
          <input type="text" placeholder="******" />
        </span>
        <button type="submit">Submit</button>

        <p>
          Don’t have an account yet?
          <a onClick={toggleModals}>Create An Account</a>{" "}
        </p>
      </form>
    </div>
  );
};

export default SignUp;
