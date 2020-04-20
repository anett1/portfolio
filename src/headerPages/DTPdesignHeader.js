import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import "../styles/Carousel.scss";

import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";
import img9 from "../assets/9.png";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  border-left: 40px solid white;
  border-right: 40px solid white;
  background-color: #f5f5f5;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1399px;
  min-height: 100vh;
  display: flex;
  justify-items: center;
  align-items: center;
  padding: 0 40px;
  @media screen and (max-width: 500px) {
    padding: 0 20px;
  }
  margin: 0 auto;
`;

const DTPdesignHeader = () => {
  return (
    <Wrapper>
      <Content>
        <Carousel>
          <div>
            <img src={img1} alt="" />
            <p className="legend">Okładki bloków</p>
          </div>
          <div>
            <img src={img2} alt="" />
            <p className="legend">Raporty roczne</p>
          </div>
          <div>
            <img src={img3} alt="" />
            <p className="legend">Plakaty</p>
          </div>
          <div>
            <img src={img4} alt="" />
            <p className="legend">Kalendarze</p>
          </div>
          <div>
            <img src={img5} alt="" />
            <p className="legend">Planery</p>
          </div>
          <div>
            <img src={img6} alt="" />
            <p className="legend">Katalogi reklamowe</p>
          </div>
          <div>
            <img src={img7} alt="" />
            <p className="legend">Katalogi reklamowe</p>
          </div>
          <div>
            <img src={img8} alt="" />
            <p className="legend">Ulotki, strony reklamowe</p>
          </div>
          <div>
            <img src={img9} alt="" />
            <p className="legend">Książki</p>
          </div>
        </Carousel>
      </Content>
    </Wrapper>
  );
};

export default DTPdesignHeader;
