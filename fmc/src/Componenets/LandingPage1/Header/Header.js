import React from "react";

const Header = (props) => {
  const { text, fontSize, fontWeight, marginBottom, fontColor, fontFamily } =
    props;

  const headerStyle = {
    fontSize: fontSize ? fontSize : "1rem",
    fontWeight: fontWeight ? fontWeight : "normal",
    marginBottom: marginBottom ? marginBottom : "0rem",
    color: fontColor ? fontColor : "black",
    display: "block",
    fontFamily: fontFamily ? fontFamily : null,
  };

  return <span style={headerStyle}> {text ? text : "Title"} </span>;
};

export default Header;
