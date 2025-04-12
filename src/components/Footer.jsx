import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="coffee-footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>☕ Coffee Vibes</h2>
          <p>❤️ for COFFEE</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/menu">Menu</Link></li>
  <li><Link to="/contact">Contact</Link></li>
</ul>

        </div>

        <div className="footer-socials">
          <h3>Follow Us</h3>
          <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </div>
      <p className="footer-bottom">© 2025 Coffee Vibes. Brewed with ❤️</p>
    </footer>
  );
};

export default Footer;
