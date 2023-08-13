import React, { useState } from "react";
import { Icon } from "@iconify/react";
import FaqData from "./FaqData";

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="faq-container">
      <div>
        <h3>Frequently Asked Questions🤔</h3>
      </div>

      <div className="faqs">
        {FaqData.map((faq, i) => {
          return (
            <div className="faq" key={i}>
              <div id="faq-question" onClick={() => toggle(i)}>
                <h4>{faq.question}</h4>
                <span>
                  {selected === i ? (
                    <Icon
                      style={{
                        color: "#010080",
                        transition: "all 0.5s ease-in-out;",
                      }}
                      className="icon"
                      icon="ic:outline-minus"
                    />
                  ) : (
                    <Icon
                      style={{ color: "#E3A300" }}
                      className="icon"
                      icon="ic:outline-plus"
                    />
                  )}
                </span>
              </div>

              <p className={selected === i ? "faq-answer shows" : "faq-answer"}>
                {faq.answer}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
