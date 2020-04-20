import React from "react";
import Carousel, { consts } from "react-elastic-carousel";

import styled from "styled-components";

import js from "../assets/logos/js.png";
import react from "../assets/logos/react.png";
import redux from "../assets/logos/redux.png";
import html from "../assets/logos/html.png";
import json from "../assets/logos/json.png";
import css from "../assets/logos/css.png";
import sass from "../assets/logos/sass.png";
import bootstrap from "../assets/logos/bootstrap.png";
import styledComponents from "../assets/logos/styledComponents.png";
import node from "../assets/logos/node.png";
import npm from "../assets/logos/npm.png";

import photoshop from "../assets/logos/photoshop.png";
import illustrator from "../assets/logos/illustrator.png";
import corel from "../assets/logos/corel.png";
import inDesign from "../assets/logos/inDesign.png";
import acrobat from "../assets/logos/acrobat.png";

const BoxItem = styled.div`
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgItem = styled.img`
  width: 100%;
  opacity: 0.25;
`;

const Button = styled.button`
  font-size: 1.6em;
  width: 50px;
  height: 50px;
  min-width: 50px;
  line-height: 50px;
  align-self: center;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  border: none;
  background: none;
  outline: 0;
`;

class ElasticCarousel extends React.Component {
  myArrow({ type, onClick }) {
    const pointer = type === consts.PREV ? "❮" : "❯";
    return <Button onClick={onClick}>{pointer}</Button>;
  }
  constructor(props) {
    super(props);
    this.breakPoints = [
      { width: 1, itemsToShow: 2 },
      { width: 400, itemsToShow: 3 },
      { width: 550, itemsToShow: 4 },
      { width: 850, itemsToShow: 5 },
      { width: 1150, itemsToShow: 6 },
      { width: 1450, itemsToShow: 7 },
      { width: 1750, itemsToShow: 7 },
    ];
  }

  render() {
    return this.props.DTPDescription ? (
      <Carousel
        breakPoints={this.breakPoints}
        renderArrow={this.myArrow}
        renderPagination={({ pages }) => {
          return (
            <div direction="row">
              {pages.map(() => {
                return null;
              })}
            </div>
          );
        }}
      >
        <BoxItem>
          <ImgItem src={photoshop} alt="photoshop" />
        </BoxItem>
        <BoxItem>
          <ImgItem src={illustrator} alt="illustrator" />
        </BoxItem>
        <BoxItem>
          <ImgItem src={inDesign} alt="inDesign" />
        </BoxItem>
        <BoxItem>
          <ImgItem src={acrobat} alt="acrobat" />
        </BoxItem>
        <BoxItem>
          <ImgItem src={corel} alt="corel" />
        </BoxItem>
      </Carousel>
    ) : (
      <Carousel
        breakPoints={this.breakPoints}
        renderArrow={this.myArrow}
        renderPagination={({ pages }) => {
          return (
            <div direction="row">
              {pages.map(() => {
                return null;
              })}
            </div>
          );
        }}
      >
        <BoxItem>
          <ImgItem src={js} alt="js" />
        </BoxItem>
        <BoxItem>
          <ImgItem src={react} alt="react" />
        </BoxItem>
        <BoxItem>
          <ImgItem src={redux} alt="redux" />
        </BoxItem>
        <BoxItem>
          <ImgItem src={html} alt="html" />
        </BoxItem>
        <BoxItem>
          <ImgItem src={json} alt="json" />
        </BoxItem>
        <BoxItem>
          <ImgItem src={css} alt="css" />
        </BoxItem>
        <BoxItem>
          <ImgItem src={sass} alt="sass" />
        </BoxItem>
        <BoxItem>
          <ImgItem src={bootstrap} alt="bootstrap" />
        </BoxItem>
        <BoxItem>
          <ImgItem src={styledComponents} alt="styledComponents" />
        </BoxItem>
        <BoxItem>
          <ImgItem src={node} alt="node" />
        </BoxItem>
        <BoxItem>
          <ImgItem src={npm} alt="npm" />
        </BoxItem>
      </Carousel>
    );
  }
}

export default ElasticCarousel;
