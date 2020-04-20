import React from "react";
import cv from "../assets/cv.pdf";
import { Link } from "react-router-dom";
import "../styles/Button.scss";

const Button = ({ children }) => {
  return (
    <div className="button">
      <Link to={cv} target="_blank" rel="noopener noreferrer">
        <svg>
          <rect></rect>
        </svg>
        {children}
      </Link>
    </div>
  );
};

export default Button;
