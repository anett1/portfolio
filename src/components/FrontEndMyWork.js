import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import "../styles/FrontEndMyWork.scss";

class FrontEndMyWork extends React.Component {
  state = {
    data: [
      {
        id: 1,
        title: "Menu- restauracja",
        technology: "react, redux,  scss",
        adressView: "https://anett1.github.io/Menu-restaurant/",
        adressCode: "https://github.com/anett1/Menu-restaurant",
      },
      {
        id: 2,
        title: "przelicznik walut",
        technology: "react, css",
        adressView: "https://anett1.github.io/currencyConverter-React",
        adressCode: "https://anett1.github.io/currencyConverter-React",
      },
      {
        id: 3,
        title: "quiz",
        technology: "html, scss, java script",
        adressView: "https://anett1.github.io/Quiz",
        adressCode: "https://github.com/anett1/Quiz",
      },
      {
        id: 4,
        title: "kalendarze portfolio",
        technology: "html, css, bootstrap",
        adressView: "https://anett1.github.io/kalendarze-portfolio",
        adressCode: "https://github.com/anett1/kalendarze-portfolio",
      },
      {
        id: 5,
        title: "gra w karty",
        technology: "html, css, java script",
        adressView: "https://anett1.github.io/card-game-3",
        adressCode: "https://github.com/anett1/card-game-3",
      },
      {
        id: 6,
        title: "kamien, papier, nozyczki",
        technology: "html, css, java script",
        adressView: "https://anett1.github.io/game_carts_wer_02",
        adressCode: "https://github.com/anett1/game_carts_wer_02",
      },
    ],
  };
  componentDidMount() {
    const boxes = [...document.querySelectorAll(".front-end-my-work")];
    boxes.map((box, index) => {
      box.style.animation
        ? (box.style.animation = "")
        : (box.style.animation = `navMYWorkFade .5s ease both ${
            index / 7 + 0.3
          }s `);
    });
  }

  render() {
    const myWork = this.state.data.map((item) => (
      <div key={item.title} className="front-end-my-work">
        <h2 className="title"> {item.title} </h2>
        <p className="technology"> {item.technology} </p>
        <div className="btn-box">
          <a
            className="btn-my-work"
            href={item.adressView}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEye} />
          </a>

          <a
            className="btn-my-work"
            href={item.adressCode}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faCode} />
          </a>
        </div>
      </div>
    ));
    return <div className="grid-box">{myWork}</div>;
  }
}

export default FrontEndMyWork;
