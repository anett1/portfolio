import React from "react";
import ElasticCarousel from "../components/ElasticCarousel";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  /*min-height: 100vh;*/
`;

const Content = styled.div`
  width: 100%;
  max-width: 1399px;
  /* min-height: 100vh;*/
  padding: 60px 40px;
  @media screen and (max-width: 500px) {
    padding: 40px 20px;
  }
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const AboutMe = styled.div`
  padding-top: 40px;
`;

const H2 = styled.h2`
  color: #eb473e;
  font-family: "Oswald";
  letter-spacing: 1px;
`;
const Skills = styled.div`
  padding-top: 40px;
  width: 100%;
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: flex-start;
  }
  flex-direction: row;
  justify-content: space-between;
`;

const Ul = styled.ul`
  column-width: auto;
  column-count: 2;
  @media (max-width: 850px) {
    column-count: 1;
  }
  column-gap: 4rem;
  list-style: none;
`;

const Li = styled.li`
  &::before {
    content: "✔";
    color: #eb473e;
    display: inline-block;
    vertical-align: middle;
    height: 25px;
    width: 25px;
  }
`;

const list = [
  "Photoshop, Adobe Illustrator, Indesign",
  "Corel Draw",
  "Doświadczenie w projektowaniu reklam",
  "Przygotowanie publikacji do druku",
  "Edycja plików PDF",
  "Zarządzanie kolorem",
  "Znajomość technologi druku",
  "Znajomość rynku poligraficznego",
];

const DTPDescription = () => {
  const mySkills = list.map((item) => <Li>{item}</Li>);
  return (
    <Wrapper>
      <Content>
        <ElasticCarousel DTPDescription />
        <AboutMe>
          <H2>KILKA SŁÓW O MNIE</H2>
          <p style={{ lineHeight: "150%" }}>
            Od 15 lat zajmuję się tematyką projektowaniem graficznym oraz
            przygotowywaniem publikacji do druku desktop publishing DTP.
            Projektuję książki i broszury, czasopisma i gazety, kaledarze,
            dokumenty, wszystkie druki informacyjne i reklamowe oraz opakowania.
            Moje środowisko pracy to programy: Adobe Photoshop , Adobe
            Illustrator, Adobe InDesign, Adobe Acrobat oraz CorelDraw. Znam,
            zasady typografii, kompozycji, materiały poligraficzne oraz techniki
            drukowania. Posiadam praktyczną wiedzę z zakresu przygotowywania
            oraz oceniania projektów do druku. Pracowałam z licznymi
            kontrahentami, z małymi firmami oraz dużymi korporacjami,
            współpracowałam z drukarniami, przy realizacji druków offsetowych
            oraz sitodruków.
          </p>
        </AboutMe>
        <Skills>
          <H2>PRAKTYCZNA WIEDZA</H2>
          <Ul>{mySkills}</Ul>
        </Skills>
      </Content>
    </Wrapper>
  );
};

export default DTPDescription;
