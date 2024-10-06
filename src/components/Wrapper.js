// src/components/Wrapper.js
import React from 'react';
import './Wrapper.css'; // Linking the CSS file

const Wrapper = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;
