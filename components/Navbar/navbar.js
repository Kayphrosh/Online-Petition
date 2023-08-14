import React, { useState, useEffect } from "react";
import Authentication from "@/pages/authentication";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolling ? "scrolling" : ""}`}>
      <div className="logo">
        <h4>
          <span id="petition">Appeal</span>
          <span id="power">Ease</span>
        </h4>
      </div>

      <ul className="nav-links">
        <li className="active-link">Home</li>
        <li>Explore</li>
        <li>FAQ</li>
        <li onClick={openModal}>Login</li>
      </ul>

      <div className="cta-btn">
        <button id="btn1">
          <img src="/Images/searchIcon.svg" alt="" />
        </button>

        <a href="/create_appeal">
          <button id="btn2">Start Your Appeal </button>
        </a>
      </div>

      {isModalOpen && (
        <Authentication isModalOpen={isModalOpen} onClose={closeModal} />
      )}

      {/* {isLoginModalOpen && <Login onLoginClose={closeLoginModal} />} */}
    </div>
  );
};

export default Navbar;
