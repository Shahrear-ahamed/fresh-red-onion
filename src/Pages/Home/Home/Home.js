import React from "react";
import { Link, Outlet } from "react-router-dom";
import ChooseUs from "../ChooseUs/ChooseUs";
import HeroSection from "../HeroSection/HeroSection";
import "./Home.css";

const Home = () => {
  return (
    <>
      <HeroSection />
      <section>
        <div className="food-container">
          <div className="food-button">
            <Link to="/breakfast">Breakfast</Link>
            <Link to="/lunch">Lunch</Link>
            <Link to="/dinner">Dinner</Link>
          </div>
          <div className="food-detail">
            <Outlet />
          </div>
        </div>
      </section>
      <ChooseUs />
    </>
  );
};

export default Home;
