import { React, useEffect, useState } from "react";
import "./Section3Style.css";
import Header from "../Header/Header";
import illustrationlaptopdesktop from "./illustrationlaptopdesktop.svg";

const Section3 = () => {
  // getting value of root css property
  const [headerFont, setheaderFont] = useState(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--font-overpass"
    )
  );
  const [headerColor, setheaderColor] = useState(
    getComputedStyle(document.documentElement).getPropertyValue("--dark-blue")
  );

  useEffect(() => {
    console.log();
  }, []);

  return (
    <div className="section3-container">
      <div className="section3-image-container">
        <img className="section3-image" src={illustrationlaptopdesktop}></img>
      </div>

      <div className="section3-content-container">
        <div className="section3-content">
          <Header
            text="Free, Open, Simple"
            fontSize="2rem"
            fontWeight="bold"
            marginBottom="1rem"
            fontColor={headerColor}
            fontFamily={headerFont}
          ></Header>

          <span className="section3-content-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </span>
        </div>
        <div className="section3-content">
          <Header
            text="Powefull Tooling"
            fontSize="2rem"
            fontWeight="bold"
            marginBottom="1rem"
            fontColor={headerColor}
            fontFamily={headerFont}
          ></Header>

          <span className="section3-content-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section3;
