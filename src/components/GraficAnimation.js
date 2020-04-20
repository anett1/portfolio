import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ReactComponent as GraficDesign } from "../assets/headerGrafic/graficDesign.svg";

const GraficAnimation = () => {
  const boxGraficDesign = useRef(null);

  useEffect(() => {
    const elements = boxGraficDesign.current.children[0];
    const design = elements.querySelector("#design");
    const bird = elements.querySelector("#bird");
    const musicLeft = elements.querySelector("#musicLeft");
    const musicRight = elements.querySelector("#musicRight");
    const cloudLeft = elements.querySelector("#cloudLeft");
    const cloudRight = elements.querySelector("#cloudRight");
    const theLife = elements.querySelector("#theLife");
    const ILike = elements.querySelector("#ILike");
    const flower1 = elements.querySelector("#flower1");
    const flower2 = elements.querySelector("#flower2");
    const flower3 = elements.querySelector("#flower3");
    const flower4 = elements.querySelector("#flower4");
    const flower5 = elements.querySelector("#flower5");

    gsap.set(
      [
        bird,
        ...musicLeft.children,
        ...musicRight.children,
        cloudLeft,
        cloudRight,
        flower1,
        flower2,
        flower3,
        flower4,
        flower5,
      ],
      { autoAlpha: 0 }
    );

    gsap.set(bird, {
      transformOrigin: "100%, 0",
    });
    gsap.set([flower1, flower2, flower3, flower4, flower5], {
      transformOrigin: "0, 100%",
    });
    gsap.set([...musicLeft.children, ...musicRight.children], {
      transformOrigin: "50%, 50%",
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    tl.fromTo(
      [...design.children, ...theLife.children, ...ILike.children],
      { strokeDasharray: "150%", strokeDashoffset: "150%" },
      { duration: 2, ease: "linear", strokeDashoffset: 0 }
    )
      .fromTo(bird, { scale: 0 }, { duration: 0.5, autoAlpha: 1, scale: 1 })

      .fromTo(
        [...musicRight.children],
        { scale: 0 },
        { duration: 0.3, autoAlpha: 1, scale: 1, stagger: 0.1 }
      )
      .fromTo(
        [...musicLeft.children],
        { scale: 0 },
        { duration: 0.3, autoAlpha: 1, scale: 1, stagger: 0.1 },
        "-=0.3"
      )
      .fromTo(
        cloudRight,
        { x: "+=300" },
        { duration: 0.5, x: "-=300", autoAlpha: 1 }
      )
      .fromTo(
        cloudLeft,
        { x: "-=300" },
        { duration: 0.5, x: "+=300", autoAlpha: 1 },
        "-=0.5"
      )
      .fromTo(
        [flower1, flower3, flower5],
        { scaleY: 0 },
        { durantion: 0.5, autoAlpha: 1, scaleY: 1 }
      )
      .fromTo(
        [flower2, flower4],
        { scaleY: 0 },
        { durantion: 0.5, autoAlpha: 1, scaleY: 1 }
      )
      .to([...design.children], {
        duration: 0.2,
        ease: "linear",
        fill: "white",
      });
  });

  const boxAnimation = {
    flexBasis: "45%",
  };
  return (
    <div style={boxAnimation} ref={boxGraficDesign}>
      <GraficDesign />
    </div>
  );
};

export default GraficAnimation;
