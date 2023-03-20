import React from "react";
import "./FooterStyle.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">LOGO</div>

      <ul className="footer-list">
        <li className="list-title"> Product </li>
        <li className="footer-list-item"> Overview</li>
        <li className="footer-list-item"> Pricing</li>
        <li className="footer-list-item"> Marketplace</li>
        <li className="footer-list-item"> Features</li>
        <li className="footer-list-item"> Integration</li>
      </ul>

      <ul className="footer-list">
        <li className="list-title"> Company </li>
        <li className="footer-list-item"> About</li>
        <li className="footer-list-item"> Team</li>
        <li className="footer-list-item"> Blog</li>
        <li className="footer-list-item"> Career</li>
      </ul>

      <ul className="footer-list">
        <li className="list-title"> Connect </li>
        <li className="footer-list-item"> Contact</li>
        <li className="footer-list-item"> NewsLetter</li>
        <li className="footer-list-item"> LinkedIn</li>
      </ul>
    </div>
  );
};

export default Footer;
