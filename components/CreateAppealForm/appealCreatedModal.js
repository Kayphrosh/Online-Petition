import React from "react";
const AppealCreatedModal = ({ onSuccessCloseModal, isSuccessModalOpen }) => {
  if (!isSuccessModalOpen) return null;
  const stopPropagation = (event) => {
    event.stopPropagation();
  };
  return (
    <div
      isOpen={isSuccessModalOpen}
      onRequestClose={onSuccessCloseModal}
      contentLabel="Success Modal"
      className="signup-container"
      onClick={onSuccessCloseModal}
    >
      <div className="modal-main">
        <div className="closeBtn" onClick={onSuccessCloseModal}>
          <img src="/Images/closeIcon.svg" alt="" />
        </div>

        <div className="successIcon">🎉</div>

        <div className="modal-text">
          <h4>Appeal Created Successfully</h4>
          <p>
            Your appeal has been successfully create and you can proceed to
            share the appeal among colleagues in order to reach larger audience
          </p>
        </div>

        <div className="modal-cta">
          <button id="share-btn">Copy Appeal Link</button>
          <button id="go-to-dashboard"> Go To Dashboard</button>
        </div>
      </div>
    </div>
  );
};

export default AppealCreatedModal;
