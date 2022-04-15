import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ChooseUs from "../ChooseUs/ChooseUs";
import HeroSection from "../HeroSection/HeroSection";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeroSection />
      <section>
        <div className="food-container">
          <div className="food-button">
            <button onClick={() => navigate("/breakfast")}>Breakfast</button>
            <button onClick={() => navigate("/lunch")}>Lunch</button>
            <button onClick={() => navigate("/dinner")}>Dinner</button>
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
