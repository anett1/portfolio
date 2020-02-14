import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../styles/DTPdesignHeader.scss";

import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";
import img9 from "../assets/9.png";

const DTPdesignHeader = () => {
  return (
    <div className="carousel">
      <Carousel>
        <div>
          <img src={img1} alt="" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={img2} alt="" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={img3} alt="" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={img4} alt="" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={img5} alt="" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={img6} alt="" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={img7} alt="" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={img8} alt="" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={img9} alt="" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default DTPdesignHeader;
