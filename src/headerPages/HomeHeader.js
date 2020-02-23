import React, {Component} from "react";
import "../styles/HomeHeader.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import { faAt} from '@fortawesome/free-solid-svg-icons';

import aneta from "../assets/homeImage/aneta2.jpg";
import cv from "../assets/cv.pdf";

class HomeHeader extends Component {
  render(){
  return (
  <div className="HomeHeader">
    <div className="Slogan"><h1>DESIGN<br/> THE LIFE <br/> YOU LIKE</h1></div>
    <div className="AboutMe">
      <div className="photo"><img src={aneta}/></div>
      <div className="description">
        <p>Miło mi gościć Cię na mojej stronie. Nazywam się Aneta Jagła. Od ponad 10 lat zajmuję się tematyką desktop publishing DTP. Projektuję książki, broszury, czasopisma, gazety, kalendarze, druki informacyjne i reklamowe, opakowania. Pracuję w programach Photoshop, Illustrator, InDesign oraz CorelDraw. Miałam przyjemność współpracować z wieloma firmami i klientami indywidualnymi. Jeśli się zastanawiasz czy dobrze trafiłeś? - zobacz moje realizacje, to one podpowiedzą Ci czy jestem osobą której szukasz.</p>
        <div className="contact">
          <p><span style = {{color: "#eb473e"}}><FontAwesomeIcon icon={faPhone}/></span> 513 090 196</p>
          <p><span style = {{color: "#eb473e"}}><FontAwesomeIcon icon={faAt}/></span> anett@poczta.fm</p>
        </div>
        <div className="buttonCV"><a href={cv} target = "_blank" rel = "noopener noreferrer" >moje CV</a></div>
        </div>      
      </div>
  </div>
  )
  }
  
};

export default HomeHeader;



