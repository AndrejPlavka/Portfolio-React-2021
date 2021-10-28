import { IoLogoGithub } from "react-icons/io";
import { MdLaunch } from "react-icons/md";
import { ProjectType } from "../../PortfolioData";

// styles
import { Link } from "react-router-dom";
import { light } from "../../PortfolioAppTheme";
import styled from "styled-components/macro";

interface Props {
  project: ProjectType;
}
export const ProjectContainer = (props: Props) => {
  const { project } = props;

  const GitHub = project.sourceCode && (
    <AIcon href={project.sourceCode} aria-label="source code" target="_blank">
      {project.sourceIcon}
    </AIcon>
  );

  const Demo = project.livePreview && (
    <LinkDemo to={project.livePreview} aria-label="live preview">
      <h2>{"Demo"}</h2>
    </LinkDemo>
  );

  return (
    <DivProject>
      <DivHeader>
        <h2>{project.name}</h2>
        <div>
          {Demo}
          {GitHub}
        </div>
      </DivHeader>
      <DivContent>
        <p>{project.description}</p>
      </DivContent>
      <DivFooter>
        {project.stack && (
          <div>
            {project.stack.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        )}
      </DivFooter>
    </DivProject>
  );
};

// styled components:
const DivProject = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  height: 20em;
  padding: 0 0.6em;
  margin-bottom: 2em;
  border-radius: 2.5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: transform 0.2s linear;
  :hover {
    transform: translateY(-7px);
  }
  @media screen and (max-width: 1128px) {
    flex-basis: 45%;
  }
  @media screen and (max-width: 760px) {
    flex-basis: 92%;
  }
  @media screen and (max-width: 430px) {
    flex-basis: 100%;
  }
`;

const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6em;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`;
const AIcon = styled.a`
  width: 1.7em;
  margin: 0 0 0 0.6em;
  opacity: 0.5;
  color: black;
  text-decoration: none;
  &:hover {
    opacity: 1;
  }
`;
const LinkDemo = styled(Link)`
  opacity: 0.5;
  color: black;
  text-decoration: none;
  font-size: 1;
  &:hover {
    opacity: 1;
  }
`;

const DivContent = styled.div`
  background: gray;
  flex: 1;
  padding: 0.6em;
  border-radius: 2.5px;
  p {
    font-size: 1.2em;
    &:hover {
      color: gray;
    }
  }
`;

const DivFooter = styled.div`
  padding: 0.6em;
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  div > div {
    width: 1.75em;
    margin: 0 0.45em;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
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
