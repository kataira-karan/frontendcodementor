import React from "react";
import EditorDesktop from "./EditorDesktop.svg";
import "./HomeStyle.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-container-header"> Designed For Future </header>

      <span className="home-content-container">
        <div className="home-content-container-left">
          <div className="home-content">
            <h2 className="home-content-header">
              {" "}
              Introducting an extensible Editor
            </h2>

            <span className="home-content-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged
            </span>
          </div>

          <div className="home-content">
            <h2 className="home-content-header">
              {" "}
              Introducting an extensible Editor
            </h2>

            <span className="home-content-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged
            </span>
          </div>
        </div>

        <div className="home-content-image-container">
          <img className="home-contianer-bgimg" src={EditorDesktop}></img>
        </div>
      </span>
    </div>
  );
};

export default Home;
