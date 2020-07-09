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
        title: "polski - nauka",
        technology: "react, bootstrap, styled components",
        adressView: "https://anett1.github.io/polski/",
        adressCode: "https://github.com/anett1/polski",
      },
      {
        id: 2,
        title: "Menu - restauracja",
        technology: "react, redux,  scss",
        adressView: "https://anett1.github.io/Menu-restaurant/",
        adressCode: "https://github.com/anett1/Menu-restaurant",
      },
      {
        id: 3,
        title: "przelicznik walut",
        technology: "react, css",
        adressView: "https://anett1.github.io/currencyConverter-React",
        adressCode: "https://github.com/anett1/currencyConverter-React",
      },
      {
        id: 4,
        title: "pogoda",
        technology: "html, css, java script (moduły, deklaracja klasy",
        adressView: "https://anett1.github.io/weather/",
        adressCode: "https://github.com/anett1/weather",
      },
      {
        id: 5,
        title: "wyszukiwarka filmów",
        technology: "html, css, java script (moduły, deklaracja klasy",
        adressView: "https://anett1.github.io/tvMaze",
        adressCode: "https://github.com/anett1/tvMaze",
      },
      {
        id: 6,
        title: "quiz",
        technology: "html, scss, java script",
        adressView: "https://anett1.github.io/Quiz",
        adressCode: "https://github.com/anett1/Quiz",
      },
      {
        id: 7,
        title: "kalendarze portfolio",
        technology: "html, css, bootstrap",
        adressView: "https://anett1.github.io/kalendarze-portfolio",
        adressCode: "https://github.com/anett1/kalendarze-portfolio",
      },
      {
        id: 8,
        title: "gra w karty",
        technology: "html, css, java script",
        adressView: "https://anett1.github.io/card-game-3",
        adressCode: "https://github.com/anett1/card-game-3",
      },
    ],
  };

  /*id: 7,
        title: "gra w karty",
        technology: "html, css, java script",
        adressView: "https://anett1.github.io/card-game-3",
        adressCode: "https://github.com/anett1/card-game-3",*/

  componentDidMount() {
    const boxes = [...document.querySelectorAll(".front-end-my-work")];
    boxes.map((box, index) => {
      return box.style.animation
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
