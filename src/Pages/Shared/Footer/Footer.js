import React from "react";
import "./Footer.css";
import footerLogo from "../../../asstes/images/logo/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  // get date and year
  const year = new Date().getFullYear();
  return (
    <footer>
      <section className="grid footer-top">
        <div>
          <img
            className="footer-logo"
            src={footerLogo}
            alt=" site footer logo"
          />
        </div>
        <div className="footer-top-info">
          <div className="links">
            <Link to="/about">About Online</Link>
            <Link to="/blog">food Read our blog</Link>
            <Link to="/signup">Sign up to deliver</Link>
            <Link to="/restaurant">Add your restaurant</Link>
          </div>
          <div className="links">
            <Link to="/help">Get help</Link>
            <Link to="faq">Read FAQs</Link>
            <Link to="cities">View all cities</Link>
            <Link to="map">Restaurants near me</Link>
          </div>
        </div>
      </section>
      <div className="grid footer-bottom">
        <p className="copyright">
          <small>Copyright &copy; {year} Red Onion</small>
        </p>
        <div className="footer-bottom-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of use</Link>
          <Link to="/pricing">Pricing</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
