import React, { useState } from "react";
import AppealCreatedModal from "./appealCreatedModal";
// import api from "../../pages/api/appealSubmission/formSubmit";
const StepFour = ({ formData, setFormData, onNext, onPrevious }) => {
  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });

      console.log("StepFour formData:", formData); 
  };
  console.log("StepFour formData:", formData); 
  // const handleSubmit = async () => {
  //   try {
  //     const response = await fetch("/api/submit", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     if (response.ok) {
  //       onNext(); // Move to the next step upon successful submission
  //     } else {
  //       // Handle error
  //     }
  //   } catch (error) {
  //     // Handle error
  //   }
  // };
  return (
    <section className="appeal-form-container">
      <div className="form-steps-container">
        <div className="header">
          <h3>Start an appeal</h3>
          <p>Create your appeal post by completing the following steps</p>
        </div>

        <div className="steps">
          <div className="step">
            <span className="progress-bar">
              <div id="circle"></div>
              <div id="dotted"></div>
            </span>

            <span className="step-title">
              <h6>Write Your Appeal Title</h6>
              <p>Tell people what you want to appeal</p>
            </span>
          </div>

          <div className="step">
            <span className="progress-bar">
              <div id="circle"></div>
              <div id="dotted"></div>
            </span>

            <span className="step-title">
              <h6>Case Description</h6>
              <p>
                The student provides a clear and concise description of the
                appeal
              </p>
            </span>
          </div>

          <div className="step">
            <span className="progress-bar">
              <div id="circle"></div>
              <div id="dotted"></div>
            </span>

            <span className="step-title">
              <h6>Involved Party Details</h6>
              <p>
                If applicable, the student specifies any involved parties, such
                as faculty members, administrators, or other students
              </p>
            </span>
          </div>

          <div className="step">
            <span className="progress-bar">
              <div id="circle"></div>
              <div id="dotted"></div>
            </span>

            <span className="step-title">
              <h6>Set A Goal</h6>
              <p>Tell people what you want to change</p>
            </span>
          </div>
        </div>
      </div>

      <main>
        <h3 className="title">Set A Goal</h3>

        <div className="form-container">
          <span>
            <label>Signature Range</label>
            <select
              type="text"
              placeholder="Enter your appeal title"
              value={formData.required_signatures_range}
              onChange={(e) =>
                handleInputChange("required_signatures_range", e.target.value)
              }
            >
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </span>

          <div className="form-cta">
            <button id="previous" onClick={onPrevious}>
              Previous
            </button>

            <button id="next" onClick={onNext}>
              Continue
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default StepFour;
