import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../asstes/images/logo/logo2.png";

const Login = () => {
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
        <input type="text" name="email" placeholder="Email" required />
        <input type="text" name="password" placeholder="Password" required />
        <input
          type="submit"
          name="submit"
          className="form-submit"
          value="Sign Up"
        />
        <p className="have-account">
          <small onClick={() => navigate("/signup")}>New to Red Onion</small>
        </p>
      </form>
    </div>
  );
};

export default Login;
