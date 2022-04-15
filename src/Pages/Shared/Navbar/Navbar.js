import React from "react";
import "./Navbar.css";
import logo from "../../../asstes/images/logo/logo2.png";
import cart from "../../../asstes/images/icons/cart.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="navbar">
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="" />
        </div>
        <div className="pages">
          <img src={cart} alt="" onClick={() => navigate("/cart")} />
          <Link className="login" to="/login">
            Login
          </Link>
          <Link className="signup" to="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
