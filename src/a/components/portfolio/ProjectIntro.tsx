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
            The portfolio currently consists of a selection of projects that I
            developed during the completion of various programing courses (
            Udemy, L2C, ITA ). The projects are mainly focused on work in React
            with Typescript. Other programming languages ​​and tools used are
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
  box-shadow: 0 3px 5px -3px rgba(57, 63, 72, 0.3);
`;
const DivContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1300px;
  width: 100%;
  padding: 6em 0.5em;
  @media screen and (max-width: 1128px) {
    padding: 5em 3em;
  }
  @media screen and (max-width: 430px) {
    padding: 4em 1.2em;
    flex-direction: column;
  }
`;

const DivText = styled.div`
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
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  /* width: 60%; */
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
  @media screen and (max-width: 430px) {
    display: none;
  }
`;
