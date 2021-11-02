import React from "react";
// Styles:
// import { PortfolioIntro } from "../../PortfolioData";
import { IconReact } from "../../assets/icons";
import styled from "styled-components/macro";
// import ReactSpin

export const ProjectIntro = () => {
  return (
    <DivMain>
      <DivContent>
        <DivText>
          <h1>Portfolio.</h1>
          <h2>Here you can chceck out some of my latest work.</h2>
          <p>
            You can find here some of the projects I’ve been working on while
            practicing my skills as part of completing various programming
            courses ( Udemy, L2C, ITA ). The projects are mainly focused on
            React and Typescript. Other programming languages and tools used are
            listed at the bottom of each project.
          </p>
        </DivText>
        <DivImg>
          <IconReact />
        </DivImg>
      </DivContent>
    </DivMain>
  );
};

// Styled components:
const DivMain = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 70vh;
  box-shadow: 0 3px 5px -3px rgba(57, 63, 72, 0.3);
`;
const DivContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1300px;
  width: 100%;
  padding: 6em 3em;
  @media screen and (max-width: 1128px) {
    padding: 5em 3em;
  }
  @media screen and (max-width: 450px) {
    padding: 4em 1.2em;
    flex-direction: column;
  }
`;

const DivText = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  line-height: 1.5;
  h1 {
    margin: 0.5em 0 0;
    font-size: 5em;
  }
  h2 {
    margin-bottom: 0.5em;
    font-size: 2.25em;
    font-family: Roboto;
    font-weight: 300;
  }
  p {
    font-weight: 300;
    font-size: 1.4em;
  }
  @media screen and (max-width: 450px) {
    padding: 0 0.6em;
    h1 {
      font-size: 4em;
    }
    h2 {
      font-size: 2em;
    }
    p {
      font-size: 1.25em;
    }
  }
`;

const DivImg = styled.div`
  flex: 1;
  align-self: center;
  flex-wrap: wrap;
  /* width: 40%; */
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: IconReact infinite 80s linear;
  }
  @keyframes IconReact {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @media screen and (max-width: 780px) {
    display: none;
  }
`;
