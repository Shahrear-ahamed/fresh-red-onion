import React from "react";
import "./Navbar.css";
import logo from "../../../asstes/images/logo/logo2.png";
import cart from "../../../asstes/images/icons/cart.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import userImg from "../../../asstes/images/icons/Group 2.png";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  // display elem
  return (
    <nav>
      <div className="navbar">
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="" />
        </div>
        <div className="pages">
          <img className="cart" src={cart} alt="" onClick={() => navigate("/cart")} />
          {user ? (
            <img className="user" src={userImg} alt="" onClick={()=> signOut(auth)} />
          ) : (
            <div className="annonymous">
              <Link className="login" to="/login">
                Login
              </Link>
              <Link className="signup" to="/signup">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
