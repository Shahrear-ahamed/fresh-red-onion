import React from "react";
import { NavLink, Outlet } from "react-router-dom";
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
            <NavLink
              className={`link ${({ isActive }) => (isActive ? "active" : "")}`}
              to="/breakfast"
            >
              Breakfast
            </NavLink>
            <NavLink
              className={`link ${({ isActive }) => (isActive ? "active" : "")}`}
              to="/lunch"
            >
              Lunch
            </NavLink>
            <NavLink
              className={`link ${({ isActive }) => (isActive ? "active" : "")}`}
              to="/dinner"
            >
              Dinner
            </NavLink>
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
