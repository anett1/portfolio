import React from "react";
import ElasticCarousel from "../components/ElasticCarousel";
import FrontEndMyWork from "../components/FrontEndMyWork";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  /*min-height: 100vh;*/
`;

const Content = styled.div`
  width: 100%;
  max-width: 1399px;
  /*min-height: 100vh;*/
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
  column-gap: 5rem;
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

const MyProgets = styled.div`
  width: 100%;
  max-width: 1399px;
  padding: 60px 0;
  @media screen and (max-width: 500px) {
    padding: 40px 20px;
  }
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const list = [
  "JavaScript ES6+",
  "React",
  "Redux",
  "HTML5, CSS3, SCSS",
  "CSS Frameworks",
  "CSS w JS",
  "Git, GitHub",
  "DOM Manipulation",
  "Responsive Web Design",
  "REST API",
  "NPM",
];

const FrontEndDescription = () => {
  const mySkills = list.map((item) => <Li key={item}>{item}</Li>);

  return (
    <Wrapper>
      <Content>
        <ElasticCarousel />
        <MyProgets>
          <H2>MOJE PROJEKTY</H2>
          <FrontEndMyWork />
        </MyProgets>

        <AboutMe>
          <H2>KILKA SŁÓW O MNIE</H2>
          <p style={{ lineHeight: "150%" }}>
            Od ponad roku sledzę na bieżąco sytuację na rynku IT oraz studiuję
            zagadnienia Frond End-u. Dobrze odnajduję się w programowaniu,
            tworzenie aplikacji webowych strawia mi dużą satysfakcję. W moich
            projektach używam JavaScriptu (ES6+) z jego frameworkiem React oraz
            biblioteki Redux. Styluje za pomocą css, scss, biblioteki Bootstrap,
            Styled Componens, animuje z CSS keyframes lub GSAP. Na codzień
            używam edytora Visual Studio Code. Moje projekty umieszczam na
            GITHub. Interesują mnie zagadnienia związane z User experience oraz
            User interface. Szukam miejsca gdzie mogłabym doskonalić moje
            umiejętności i wiedzę tworząc nowe projekty.
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

export default FrontEndDescription;
