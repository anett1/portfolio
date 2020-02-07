import React, { Component } from "react";
import FrontEndMyWork from "../components/FrontEndMyWork";

import img1 from "../imagesFrontEnd/1.png";
import img2 from "../imagesFrontEnd/2.png";
import img3 from "../imagesFrontEnd/3.png";
import img4 from "../imagesFrontEnd/4.png";
import img5 from "../imagesFrontEnd/5.png";

const data = [
  {
    id: 1,
    img: img1,
    title: "kalendarze portfolio",
    technology: "html, css, bootstrap",
    adressView: "https://anett1.github.io/kalendarze-portfolio",
    adressCode: "https://github.com/anett1/kalendarze-portfolio"
  },
  {
    id: 2,
    img: img2,
    title: "przelicznik walut",
    technology: "react, css",
    adressView: "https://anett1.github.io/currencyConverter-React",
    adressCode: "https://github.com/anett1/currencyConverter-React"
  },
  {
    id: 3,
    img: img3,
    title: "quiz",
    technology: "html, scss, java script",
    adressView: "https://anett1.github.io/Quiz",
    adressCode: "https://github.com/anett1/Quiz"
  },
  {
    id: 4,
    img: img4,
    title: "gra w karty",
    technology: "html, css, java script",
    adressView: "https://anett1.github.io/card-game-3",
    adressCode: "https://github.com/anett1/card-game-3"
  },
  {
    id: 5,
    img: img5,
    title: "kamien, papier, nozyczki",
    technology: "html, css, java script",
    adressView: "https://anett1.github.io/game_carts_wer_02",
    adressCode: "https://github.com/anett1/game_carts_wer_02"
  }
];

const FrontEndHeader = () => {
  return (
    <>
      <FrontEndMyWork data={data} />
    </>
  );
};

export default FrontEndHeader;
