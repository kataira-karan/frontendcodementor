import React from "react";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="landingpage-container">
      <h1>My Front End Mentor Challenges</h1>

      <Link to="/landingpage1"> Landing Page1 </Link>
    </div>
  );
};

export default LandingPage;
