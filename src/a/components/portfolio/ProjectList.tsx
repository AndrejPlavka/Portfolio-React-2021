import { ProjectContainer } from "./ProjectContainer";
import { projects } from "../../PortfolioData";
import React from "react";

// Styles:
import styled from "styled-components/macro";

export const randomID = () => Math.random().toString(36).substr(2, 8);

// Component:
export const ProjectList = () => {
  if (!projects.length) return null;

  // Template
  return (
    <Section id="projects" className="section projects">
      <H2 className="section__title">Projects</H2>

      <DivProjetsGrid className="projects__grid">
        {projects.map((project) => (
          <ProjectContainer key={randomID()} project={project} />
        ))}
      </DivProjetsGrid>
    </Section>
  );
};

// styled cpomponets:
const DivProjetsGrid = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
  grid-gap: 2em;
`;
// section__title
const H2 = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1em;
  text-transform: uppercase;
`;
// section projects
const Section = styled.section`
  margin-top: 5em;
`;
