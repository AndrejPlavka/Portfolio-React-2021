import { ProjectContainer } from "../portfolio/ProjectContainer";
import { projects } from "../../PortfolioData";

// Styles:
import { theme } from "../../../GlobalStyles";
import styled from "styled-components/macro";

// Component:
export const ProjectPreview = () => {
  if (!projects.length) return null;
  // Template - show only the last three projects:
  return (
    <DivMain>
      <H2>Some of my latest work</H2>

      <DivProjectsList>
        {projects.slice(0, 3).map((project, index) => (
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
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
`;

const H2 = styled.h1`
  padding: 3em 10% 0.5em;
  text-align: center;
  font-size: 2.5em;
  font-weight: 300;
  font-family: Roboto;
  text-transform: uppercase;
  color: ${theme.text_gr_l};
`;

const DivProjectsList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 80%;
  padding: 2em 0 4em;

  @media screen and (${theme.sx_min_425}) {
    max-width: 540px;
  }
  @media screen and (${theme.sm_min_768}) {
    width: 90%;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-evenly;
    max-width: 1200px;
  }
`;
