import { ProjectIntro } from "../components/portfolio/ProjectIntro";
import { ProjectList } from "../components/portfolio/ProjectList";
import React from "react";
// styles:
import styled from "styled-components/macro";

// Component
export const Portfolio = () => {
  return (
    <DivMain>
      <ProjectIntro />
      <ProjectList />
    </DivMain>
  );
};

// Styled compoentns:
const DivMain = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: black;

  /* @media (max-width: 1250px) {
    padding: 2em 4em;
  }

  @media (max-width: 1000px) {
    flex-basis: 100%;
    padding: 2em 4em;
  }
  @media (max-width: 700px) {
    flex-basis: 100%;
    padding: 1em 1em;
  } */
  /* display: flex; */
  /* background: ""; */
  /* flex-direction: column;
  padding-top: 5em;
  padding-bottom: 5em; */
`;
