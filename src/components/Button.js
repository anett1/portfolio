import React from "react";
import cv from "../assets/cvAnetaJagla.pdf";
import "../styles/Button.scss";

const Button = ({ children }) => {
  return (
    <div className="button">
      <a href={cv} target="_blank" rel="noopener noreferrer">
        <svg>
          <rect></rect>
        </svg>
        {children}
      </a>
    </div>
  );
};

export default Button;
