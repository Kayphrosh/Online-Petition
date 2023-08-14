import React, { useState } from "react";
import SignUp from "@/components/Aunthentication/SignUp";
import Login from "@/components/Aunthentication/Login";

const Authentication = ({ onClose }) => {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const toggleModals = () => {
    setIsSignUpModalOpen(!isSignUpModalOpen);
    setIsLoginModalOpen(!isLoginModalOpen);
  };
  return (
    <div className="signup-container">
      {isSignUpModalOpen && (
        <SignUp toggleModals={toggleModals} onClose={onClose} />
      )}
      {isLoginModalOpen && (
        <Login onClose={onClose} toggleModals={toggleModals} />
      )}
    </div>
  );
};

export default Authentication;
