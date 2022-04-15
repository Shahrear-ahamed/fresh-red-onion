import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../asstes/images/logo/logo2.png";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, , , error] =
    useSignInWithEmailAndPassword(auth);
  const notifyError = (data) => toast.error(data);

  // login section
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // login
    signInWithEmailAndPassword(email, password);
    if (error) {
      notifyError(error.message);
    } else {
      navigate("/");
    }
  };

  // return section are here
  return (
    <div className="container">
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
          value="Login"
        />
        <p className="have-account">
          <small onClick={() => navigate("/signup")}>New to Red Onion</small>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
