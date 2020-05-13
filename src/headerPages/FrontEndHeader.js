import React from "react";
import HomeBackground from "../components/HomeBackground";
import GraficAnimation from "../components/GraficAnimation";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  border-left: 40px solid white;
  border-right: 40px solid white;
  overflow: hidden;
`;

const FrontEndHeader = () => {
  const homeHeader = {
    position: "relative",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <Wrapper>
      <div style={homeHeader}>
        <GraficAnimation />
        <HomeBackground />
      </div>
    </Wrapper>
  );
};

export default FrontEndHeader;
