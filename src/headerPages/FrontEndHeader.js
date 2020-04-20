import React from "react";
import FrontEndMyWork from "../components/FrontEndMyWork";
import GraficFrontEnd from "../components/GraficFrontEnd";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  border-left: 40px solid white;
  border-right: 40px solid white;
  background-color: #cca32b;
  overflow: hidden;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1399px;
  min-height: 100vh;
  padding: 60px 40px;
  @media screen and (max-width: 500px) {
    padding: 40px 20px;
  }
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const H1 = styled.h1`
  font-family: "Oswald";
  color: white;
  letter-spacing: 1px;

  font-size: 2rem;
  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
  padding-bottom: 20px;
  z-index: 999;
`;

const FrontEndHeader = () => {
  return (
    <Wrapper>
      <Content>
        <H1>MOJE PROJEKTY</H1>
        <FrontEndMyWork />
      </Content>
      <GraficFrontEnd />
    </Wrapper>
  );
};

export default FrontEndHeader;
