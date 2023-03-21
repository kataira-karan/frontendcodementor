import React from "react";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="landingpage-container">
      <h1>My Front End Mentor Challenges</h1>

      <a href="/landingpage1" target="_blank">
        {" "}
        Landing Page1{" "}
      </a>
      <a href="/shortify" target="_blank">
        Shortify{" "}
      </a>
    </div>
  );
};

export default LandingPage;
