import { ProjectContainer } from "./ProjectContainer";
import { projects } from "../../PortfolioData";
import React from "react";

// Styles:
import { theme } from "../../../GlobalStyles";
import styled from "styled-components/macro";

// Component:
export const ProjectList = () => {
  if (!projects.length) return null;

  // Template
  return (
    <DivMain>
      <DivProjectsList>
        {projects.map((project, index) => (
          <ProjectContainer key={index} project={project} />
        ))}
      </DivProjectsList>
    </DivMain>
  );
};

// styled cpomponets:
const DivMain = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const DivProjectsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  padding: 6em 3em;

  @media screen and (${theme.sx_min_425}) {
    width: 80%;
    justify-content: space-around;
  }
  @media screen and (${theme.sm_min_768}) {
    width: 100%;
  }

  @media screen and (${theme.md_min_1024}) {
    justify-content: space-between;
  }
`;
