import React from "react";
import styled, { keyframes } from "styled-components";

const movement = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

const Gradient = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #72a0b8, #728cb8, #72a0b8, #728cb8);
  background-size: 400% 400%;
  animation: ${movement} 15s ease infinite;
  z-index: -99;
`;
const HomeBackground = () => {
  return <Gradient></Gradient>;
};

export default HomeBackground;

//background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);

//background: #94b7c9;
