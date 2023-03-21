import React from "react";
import "./UrlInputStyle.css";

const UrlInput = () => {
  return (
    <div className="url-input-container">
      <div className="url-input-form-container">
        <from className="url-input-form">
          <input
            className="url-input"
            type="text"
            placeholder="Shorten a link hear"
          />
          <button className="copy-button">Submiit</button>
        </from>
      </div>

      <div className="shorten-url-container">
        <span> http://localhost:3000/shortify </span>
        <div className="new-shorten-url-container">
          <span> http://localhost </span>
          <button className="copy-button">Copy</button>
        </div>
      </div>
      <div className="shorten-url-container">
        <span> http://localhost:3000/shortify </span>
        <div className="new-shorten-url-container">
          <span> http://localhost </span>
          <button className="copy-button">Copy</button>
        </div>
      </div>
      <div className="shorten-url-container">
        <span> http://localhost:3000/shortify </span>
        <div className="new-shorten-url-container">
          <span> http://localhost </span>
          <button className="copy-button">Copy</button>
        </div>
      </div>
      <div className="shorten-url-container">
        <span> http://localhost:3000/shortify </span>
        <div className="new-shorten-url-container">
          <span> http://localhost </span>
          <button className="copy-button">Copy</button>
        </div>
      </div>
      <div className="shorten-url-container">
        <span> http://localhost:3000/shortify </span>
        <div className="new-shorten-url-container">
          <span> http://localhost </span>
          <button className="copy-button">Copy</button>
        </div>
      </div>
    </div>
  );
};

export default UrlInput;
