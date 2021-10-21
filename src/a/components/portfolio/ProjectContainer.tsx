import { IoLogoGithub } from "react-icons/io";
import { MdLaunch } from "react-icons/md";
import { ProjectType } from "../../PortfolioData";
import { randomID } from "./ProjectList";

// styles
import { light } from "../../PortfolioAppTheme";
import styled from "styled-components/macro";

interface Props {
  project: ProjectType;
}
export const ProjectContainer = (props: Props) => {
  const { project } = props;
  return (
    <DivProject className="project">
      <h3>{project.name}</h3>

      <PPDescription className="project__description">
        {project.description}
      </PPDescription>
      {project.stack && (
        <UlPStack className="project__stack">
          {project.stack.map((item) => (
            <LiPStackItem key={randomID()} className="project__stack-item">
              {item}
            </LiPStackItem>
          ))}
        </UlPStack>
      )}

      {project.sourceCode && (
        <ALinkIcon
          href={project.sourceCode}
          aria-label="source code"
          className="link link--icon"
        >
          <IoLogoGithub />
        </ALinkIcon>
      )}

      {project.livePreview && (
        <ALinkIcon
          href={project.livePreview}
          aria-label="live preview"
          className="link link--icon"
        >
          <MdLaunch />
        </ALinkIcon>
      )}
    </DivProject>
  );
};

// styled components:
const DivProject = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2em;
  margin: 0 auto;
  text-align: center;
  box-shadow: ${light.shadow};
  transition: transform 0.2s linear;
  margin-left: 0.5em;
  :hover {
    transform: translateY(-7px);
  }
`;

const PPDescription = styled.p`
  margin-top: 1em;
`;

const UlPStack = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1.2em 0;
`;

const LiPStackItem = styled.li`
  margin: 0.5em;
  font-weight: 500;
  font-size: 0.8rem;
  color: ${light.crlfgalt};
`;
const ALinkIcon = styled.a`
  margin-left: 0.5em;
`;
// .project {
//     padding: 2em;
//     margin: 0 auto;
//     text-align: center;
//     box-shadow: var(--shadow);
//     transition: transform 0.2s linear;
//   }

//   .project:hover {
//     transform: translateY(-7px);
//   }

//   .project__description {
//     margin-top: 1em;
//   }

//   .project__stack {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     margin: 1.2em 0;
//   }

//   .project__stack-item {
//     margin: 0.5em;
//     font-weight: 500;
//     font-size: 0.8rem;
//     color: var(--clr-fg-alt);
//   }

//   .project .link--icon {
//     margin-left: 0.5em;
//   }
