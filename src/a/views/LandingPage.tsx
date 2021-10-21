import { Intro } from "../components/home/Intro";
import { ProjectList } from "../components/portfolio/ProjectList";
import React, { useContext } from "react";

// Styles:
import styled from "styled-components/macro";

// Component:
export const LandingPage = () => {
  // const { themeName } = useContext(ThemeContext);

  return (
    <DivHome>
      <Intro />
      <ProjectList />
    </DivHome>
  );
};

// Styled components:
const DivHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  //   margin-top: 3em;
`;
