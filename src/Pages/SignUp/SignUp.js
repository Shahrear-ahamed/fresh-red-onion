import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import logo from "../../asstes/images/logo/logo2.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, , error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);

  // toast error are here
  const notify = (data) => toast(data);

  // form submit are here
  const handleSubmit = async (e) => {
    // prevent form loading part
    e.preventDefault();
    // get input value are here
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    // error handaling part here
    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      navigate("/");
    } else {
      notify("Password and Confirm password are not matched");
    }
  };
  if (error) {
    notify(error);
  }

  // rendar
  return (
    <div className="container">
      <div className="signup-logo">
        <img src={logo} alt="" />
      </div>
      <form autoComplete="off" className="sign-up-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <input
          type="password"
          name="confirmPassword"
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
      <ToastContainer />
    </div>
  );
};

export default SignUp;
