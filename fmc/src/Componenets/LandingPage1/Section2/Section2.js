import React from "react";
import "./Section2Style.css";
import illustrationphones from "./illustrationphones.svg";
import bgpatterncircles from "./bgpatterncircles.svg";

const Section2 = () => {
  return (
    <div className="section2-container">
      <div className="section2-image-container">
        <img className="section2-image" src={illustrationphones}></img>
      </div>

      <div className="section2-description">
        <header className="section2-header">
          {" "}
          State of Are Intrastructure{" "}
        </header>

        <span className="section2-description-content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged
        </span>
      </div>
    </div>
  );
};

export default Section2;
