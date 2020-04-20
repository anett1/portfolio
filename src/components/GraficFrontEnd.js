import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ReactComponent as FrontEnd } from "../assets/headerGrafic/graficFrontEnd.svg";

const GraficFrontEnd = () => {
  const boxGraficDesign = useRef(null);

  useEffect(() => {
    const elements = boxGraficDesign.current.children[0];
    const frontEnd = elements.querySelector("#frontEnd");

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    tl.fromTo(frontEnd, { autoAlpha: 0 }, { duration: 1, autoAlpha: 1 });
  });

  const boxAnimation = {
    position: "absolute",
    minWidth: "100%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity: ".3",
  };

  return (
    <div style={boxAnimation} ref={boxGraficDesign}>
      <FrontEnd />
    </div>
  );
};

export default GraficFrontEnd;
