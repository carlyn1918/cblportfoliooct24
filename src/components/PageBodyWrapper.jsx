// src/components/Wrapper.js
import React from "react";
import "./PageBodyWrapper.css"; // Linking the CSS file

const PageBodyWrapper = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default PageBodyWrapper;
