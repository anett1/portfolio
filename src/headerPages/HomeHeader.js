import React from "react";
import HomeBackground from "../components/HomeBackground";
import GraficAnimation from "../components/GraficAnimation";

const HomeHeader = () => {
  const homeHeader = {
    position: "relative",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderLeft: "40px solid white",
    borderRight: "40px solid white",
  };
  return (
    <div style={homeHeader}>
      <GraficAnimation />
      <HomeBackground />
    </div>
  );
};

export default HomeHeader;
