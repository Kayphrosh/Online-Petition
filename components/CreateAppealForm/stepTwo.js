import React from "react";

const StepTwo = () => {
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
        <h3 className="title">Case Description</h3>

        <form>
          <span>
            <label>Title</label>
            <textarea
              name="description"
              placeholder="Enter description of your appeal"
              rows="10"
            />
          </span>

          <div className="form-cta">
            <button id="previous">Previous</button>

            <button id="next">Continue</button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default StepTwo;
