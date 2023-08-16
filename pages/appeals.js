import React from "react";
import Navbar from "@/components/Navbar/navbar";
import Explore from "@/components/Explore/exploreData";
const appeals = () => {

  
  return (
    <div className="explore-container">
      <Navbar />

      <div className="page-title">
        <h3>Explore⚡️</h3>
      </div>

      <div className="tabs-container">
        <div className="tabs">
          <div className="tab active-tab">Recents</div>
          <div className="tab">Featured</div>
          <div className="tab">Popular</div>
          <div className="tab">Victories</div>
        </div>

        <div className="search-bar">
          <input type="search" placeholder="Search for appeals with key words" />
          <img src="/Images/searchIcon.svg" alt="" />
        </div>
      </div>

      <Explore />
    </div>
  );
};

export default appeals;
