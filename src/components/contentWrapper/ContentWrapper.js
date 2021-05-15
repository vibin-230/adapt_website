import React from "react";
import "./ContentWrapper.css";

export const ContentWrapper = (props) => {
  return (
    <div className="content-wrapper" onClick={props.onClick}>
      {props.children}
    </div>
  );
};
