import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="title">Best food waiting for your belly</h1>
        <div className="hero-search">
          <input type="text" placeholder="Search food items" />
          <input
            type="button"
            onClick={() => toast.warn("Features are comming sooon")}
            value="Search"
          />
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default HeroSection;
