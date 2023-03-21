import React from "react";
import Card from "./Card/Card";
import Nav from "./Nav/Nav";
import "./ShortifyHomeStyle.css";
import illustrationworking from "./illustrationworking.svg";

const ShortifyHome = () => {
  return (
    <div className="shopify-contianer">
      <Nav></Nav>

      <div className="shopify-banner-container">
        <div className="shopify-banner-content">
          <header>More than just Shorter Links</header>

          <span className="shopify-banner-description">
            Build your brand's recoginition and get detailed insights on ho
            wyour links are performing
          </span>
          <button className="get-started-button">Get Started</button>
        </div>

        <div className="shopify-banner-image-container">
          <img className="shopify-banner-image" src={illustrationworking}></img>
        </div>
      </div>

      <div className="cards">
        <Card marginTop="0"></Card>
        <Card marginTop="5%"></Card>
        <Card marginTop="10%"></Card>
      </div>
    </div>
  );
};

export default ShortifyHome;
