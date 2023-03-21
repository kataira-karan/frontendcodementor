import React from "react";
import "./NavStyle.css";
import gsap from "gsap";

const Nav = () => {
  const openMobileNav = () => {
    gsap.fromTo(
      ".mobile-nav",
      { x: "-100%", opacity: 0 },
      { x: 0, opacity: 1 }
    );
  };

  const closeMobileNav = () => {
    gsap.fromTo(
      ".mobile-nav",
      { x: 0, opacity: 1 },
      { x: "-100%", opacity: 0 }
    );
  };

  return (
    <ul className="shopify-nav-container">
      <li className="nav-logo">Shortify</li>

      <button className="ham" onClick={openMobileNav}>
        {" "}
        open{" "}
      </button>

      <div className="mobile-nav">
        <button className="close-button" onClick={closeMobileNav}>
          {" "}
          Close{" "}
        </button>
        <li className="shopify-list-item">Features</li>
        <li className="shopify-list-item">Pricing</li>
        <li className="shopify-list-item">Resoruces</li>
        <li className="shopify-list-item auth">Login</li>
        <li className="shopify-list-item auth">Signup</li>
      </div>

      <li className="sub-nav">
        <ul className="sub-nav-1">
          <li className="shopify-list-item">Features</li>
          <li className="shopify-list-item">Pricing</li>
          <li className="shopify-list-item">Resoruces</li>
        </ul>

        <ul className="sub-nav-2">
          <li className="shopify-list-item auth">Login</li>
          <li className="shopify-list-item auth">Signup</li>
        </ul>
      </li>
    </ul>
  );
};

export default Nav;
