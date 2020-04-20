import React from "react";
import Button from "../components/Button";
import aneta from "../assets/homeImage/aneta2.jpg";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const AboutMe = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Quotation = styled.div`
  position: relative;
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #72a0b8;
  border-left: 40px solid white;
  border-right: 40px solid white;
  padding-bottom: 75px;
`;

const Date = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 80px;
`;

const BoxPhoto = styled.div`
  position: absolute;
  left: 50%;
  bottom: -75px;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid white;
  overflow: hidden;
`;

const H1 = styled.h1`
  font-family: "Oswald";
  color: white;
  letter-spacing: 1px;
  font-size: 2rem;
  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

const HomeDescription = () => {
  return (
    <Wrapper>
      <AboutMe>
        <Quotation>
          <H1>
            <span style={{ fontWeight: "300" }}>od 15 lat </span> GRAFIK
            DESIGNER
          </H1>
          <H1>
            <span style={{ fontWeight: "300" }}>od 1 roku </span> FRONT END
            DEVELOPER
          </H1>
          <BoxPhoto>
            <img style={{ width: "100%" }} src={aneta} alt={aneta} />
          </BoxPhoto>
        </Quotation>
        <Date>
          <h1>Aneta Jagła</h1>
          <div style={{ paddingTop: "20px" }}>
            <p>tel.: 513 090 196</p>
            <p>e-mail: anett@poczta.fm</p>
          </div>
          <div style={{ padding: "20px 0" }}>
            <Button> MOJE CV</Button>
          </div>
        </Date>
      </AboutMe>
    </Wrapper>
  );
};

export default HomeDescription;
