import React from "react";

const SuccessPetition = () => {
  const latestPetition = [
    {
      posterImg: "/Images/sampleImg.jpg",
      petitionTitle:
        "LIVE BROADCAST THE NIGERIA PRESIDENTIAL ECTION PETITION TRIBUNAL-PEPT",
      petitionParagraph:
        "Unleash the power of petitions with ease. Create, manage, and romote your causes effortlessly... ",
      petitionLink: "www.google.com",
      signed: 1000,
      goal: 10000,
      userName: "Olakunbi Olabode Oluwakayode",
    },
    {
      posterImg: "/Images/sampleImg.jpg",
      petitionTitle:
        "LIVE BROADCAST THE NIGERIA PRESIDENTIAL ECTION PETITION TRIBUNAL-PEPT",
      petitionParagraph:
        "Unleash the power of petitions with ease. Create, manage, and romote your causes effortlessly... ",
      petitionLink: "www.google.com",
      signed: 1000,
      goal: 10000,
      userName: "Olakunbi Olabode Oluwakayode",
    },
  ];

  return (
    <div className="latest-petition-container success-stories-container">
      <div className="title">
        <h3>Successful Stories👏🏾</h3>

        <button>
          <p>View all</p>
          <img src="/Images/arrowrightIcon.svg" alt="" />
        </button>
      </div>

      <main className="petitions">
        {latestPetition.map((petition, idx) => {
          return (
            <div className="petition" key={idx}>
              <img
                className="petition-banner"
                src={petition.posterImg}
                alt=""
              />

              <h5>{petition.petitionTitle}</h5>

              <p>
                {" "}
                {petition.petitionParagraph}{" "}
                <a href="{}" target="__blank">
                  Read More
                </a>
              </p>

              <div className="progressbar-container">
                <div className="progressbar">
                  <span id="bar"></span>
                  <span id="progress"></span>
                </div>

                <div className="stats">
                  <small>{petition.signed} Signatures</small>
                  <small>{petition.goal} Next Goal</small>
                </div>
              </div>

              <div className="poster-details">
                <span id="icon">
                  <img src="/Images/userIcon.svg" alt="" />
                </span>

                <span id="name">
                  <small>Started By:</small>
                  <p>{petition.userName}</p>
                </span>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default SuccessPetition;
