import React from "react";
import "./NavStyle.css";
import { IoIosArrowDown } from "react-icons/io";
import iconhamburger from "./iconhamburger.svg";
import { gsap } from "gsap";

const Nav = () => {
  const openMenu = () => {
    console.log("opeing");
    gsap.fromTo(".mobile-menu", { x: -"100%" }, { x: 0, duration: 1 });
  };
  return (
    <ul className="nav-container">
      <span className="nav-logo">Logo</span>

      <div className="nav-links">
        <span className="nav-link">
          {" "}
          <span className="nav-link-label">Product</span>{" "}
          <IoIosArrowDown></IoIosArrowDown>{" "}
        </span>
        <span className="nav-link">
          {" "}
          <span className="nav-link-label">Company</span>{" "}
          <IoIosArrowDown></IoIosArrowDown>{" "}
        </span>
        <span className="nav-link">
          {" "}
          <span className="nav-link-label">Connect</span>{" "}
          <IoIosArrowDown></IoIosArrowDown>{" "}
        </span>
      </div>

      {/* <div className="nav-auth-links">
        <span className="nav-auth-link">Login</span>
        <span className="nav-auth-link"> Signup</span>
      </div> */}

      <div className="mobile-menu">asdadasd</div>

      <img onClick={openMenu} className="hamburger" src={iconhamburger}></img>
    </ul>
  );
};

export default Nav;
