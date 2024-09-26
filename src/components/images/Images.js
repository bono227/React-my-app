import React from "react";
import "./Images.css";

export const Image = (props) => {
  const { size } = props;
  if (size === "small") {
    return <div id="small-img"></div>;
  }
  if (size === "medium") {
    return <div id="medium-img"></div>;
  }
  return <div></div>;
};
