import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import logo from "../../asstes/images/logo/logo2.png";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <div>
      <div className="signup-logo">
        <img src={logo} alt="" />
      </div>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="email" placeholder="Email" required />
        <input type="text" name="password" placeholder="Password" required />
        <input
          type="text"
          name="confirm-password"
          placeholder="Confirm Password"
          required
        />
        <input
          type="submit"
          name="submit"
          className="form-submit"
          value="Sign Up"
        />
        <p className="have-account">
          <small onClick={() => navigate("/login")}>
            Already have an account
          </small>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
