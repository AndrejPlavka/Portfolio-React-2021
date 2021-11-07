import { ProjectContainer } from "../portfolio/ProjectContainer";
import { projects } from "../../PortfolioData";

// Styles:
import styled from "styled-components/macro";

// Component:
export const ProjectPreview = () => {
  if (!projects.length) return null;

  // Template - show only the last three projects:
  return (
    <DivMain>
      <DivProjectsList>
        {projects.slice(-3).map((project, index) => (
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
  padding: 6em 3em;
  @media screen and (max-width: 1128px) {
    padding: 5em 3em;
  }
  @media screen and (max-width: 780px) {
    justify-content: center;
  }
  @media screen and (max-width: 450px) {
    justify-content: center;
    padding: 4em 0.5em;
  }
`;
