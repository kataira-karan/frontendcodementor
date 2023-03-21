import React from "react";
import "./CardStyle.css";

const Card = (props) => {
  const { marginTop } = props;
  const cardStyle = {
    marginTop: marginTop,
  };

  return (
    <div style={cardStyle} className="card-container">
      <div className="card-image-container">
        <img
          className="card-image"
          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80"
        />{" "}
      </div>
      <div className="card-content">
        <span className="card-header"> Header </span>
        <p className="card-description">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make{" "}
        </p>
      </div>
    </div>
  );
};

export default Card;
