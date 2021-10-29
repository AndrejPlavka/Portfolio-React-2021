import { ProjectContainer } from "./ProjectContainer";
import { projects } from "../../PortfolioData";
import React from "react";

// Styles:
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
  align-content: center;
  width: 100%;
  height: 100%;
`;

const DivProjectsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1300px;
  width: 100%;
  padding: 6em 0.5em;
  @media screen and (max-width: 1128px) {
    padding: 5em 3em;
  }
  @media screen and (max-width: 760px) {
    justify-content: center;
  }
  @media screen and (max-width: 430px) {
    justify-content: center;
    padding: 4em 0.5em;
  }
`;

// // grid
// const DivGrid = styled.div`
//   max-width: 1010px;
//   width: 100%;
//   padding: 6em 0.5em;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
//   grid-gap: 1em;
//   @media screen and (max-width: 1128px) {
//     padding: 5em 3em;
//   }
// `;

// section__title
// const H2 = styled.h2`
//   width: 100%;
//   margin: 2.5em 0;
//   font-size: 2rem;
//   text-align: center;
//   text-transform: uppercase;
// `;
