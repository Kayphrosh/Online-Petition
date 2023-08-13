import React from "react";

const Heroe = () => {
  return (
    <div className="heroe-container">
      <main className="main-content">
        <div className="heroe-text">
          <span>Your Appeal Management App</span>

          <div className="text">
            <h2>
              AppealEase: <br /> Empower Your Appeal, Simplify Your Success
            </h2>
            <img src="/Images/heroeText.svg" alt="" />
          </div>

          <p className="paragraph">
            Revolutionizing appeal management, AppealEase is a streamlined web
            app that simplifies submission, tracking, and resolution processes
            for educational institutions, fostering transparent communication
            and efficiency.
          </p>

          <div className="cta-btn">
            <button id="btn1">
              <img src="/Images/plusIcon.svg" alt="" />
              <p>Start An Appeal</p>
            </button>

            <button id="btn2">
              <img src="/Images/scrollIcon.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="illustration">
          <img src="/Images/heroeIllustration.svg" alt="" />
        </div>
      </main>
    </div>
  );
};

export default Heroe;
