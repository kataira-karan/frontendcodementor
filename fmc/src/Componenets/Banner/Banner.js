import React from "react";
import Nav from "../Nav/Nav";
import "./BannerStyle.css";
import Bgpatterdesktop from "./Bgpatterdesktop.svg";

const Banner = () => {
  return (
    <>
      <div className="banner-container">
        <Nav></Nav>
        <div className="banner-overlay">
          <img className="banner-overplay-image" src={Bgpatterdesktop}></img>
        </div>

        <div className="banner-content">
          <header className="banner-header">A Modern Publishin Platform</header>
          <span className="banner-tagline">
            Grow Your Audiance build your online brand
          </span>
          <div>
            <button className="primary-button banner-button ">
              {" "}
              Start For Free{" "}
            </button>
            <button className="banner-button"> Learn More </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
