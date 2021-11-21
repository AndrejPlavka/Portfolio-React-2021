import { ProjectType } from "../../PortfolioData";

// styles
import { Link } from "react-router-dom";
import { theme as project } from "./theme";
import { theme } from "../../../GlobalStyles";
import styled, { keyframes } from "styled-components/macro";

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
      <p>{project.description}</p>
      <DivHeader>
        <h3>{project.name}</h3>
        <div>
          {Demo}
          {GitHub}
        </div>
      </DivHeader>
      <DivContent
        style={{
          backgroundImage: `url(${project.bgImg})`,
        }}
      >
        {/* <p>{project.description}</p> */}
      </DivContent>
      <DivFooter>
        {project.stack && (
          <div>
            {project.stack.map((item, index) => (
              <div className="svg" key={index}>
                {item}
              </div>
            ))}
          </div>
        )}
      </DivFooter>
    </DivProject>
  );
};

// styled components:
const fadeIn = keyframes`
0% {opacity: 0}
100% {opacity: 1}
`;

const DivProject = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  max-width: 23em;
  min-width: 17em;
  height: 20em;
  padding: 0 0.5em;
  margin: 1em 0.25em;
  border-radius: 2.5px;
  box-shadow: ${project.shadow_btn};
  transition: transform 0.2s linear;
  p {
    z-index: 2;
    display: none;
    align-self: center;
    align-items: center;
    flex-flow: row wrap;
    width: 20em;
    height: auto;
    position: absolute;
    padding: 1em;
    font-size: 0.85em;
    font-weight: 400;
    border-radius: 4px;
    background: ${project.backgroundFaded};
    color: ${project.textSecondary};
    animation: 0.35s ${fadeIn} forwards;
  }
  :hover {
    transform: translateY(-3px);
    p {
      display: flex;
      transform: translateY(0);
    }
  }
  @media screen and (${theme.sx_min_425}) {
    width: 80%;
  }
  @media screen and (${theme.sm_min_768}) {
    width: 40%;
    height: 18em;
    max-width: 20em;
  }
  @media screen and (${theme.md_min_1024}) {
    width: 30%;
    min-width: 17em;
    height: 17em;
    p {
      font-size: 0.75em;
    }
  }
`;

const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6em 0.5em;
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
  color: ${theme.color_bl_s};
  text-decoration: none;
  &:hover {
    opacity: 1;
  }
  @media screen and (${theme.md_min_1024}) {
    width: 1.5em;
  }
`;
const LinkDemo = styled(Link)`
  opacity: 0.5;
  color: ${theme.color_bl_s};
  text-decoration: none;
  font-size: 0.8em;
  &:hover {
    opacity: 1;
  }
`;

const DivContent = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-self: center;
  width: 90%;
  padding: 0.5em;
  box-shadow: ${project.shadow_btn2};
  border-radius: 2px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  filter: grayscale(100%);
`;

const DivFooter = styled.div`
  padding: 0.6em 0.5em;
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .svg {
    width: 1.9em;
    height: 1.9em;
    margin: 0 0.45em 0 0;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
  @media screen and (${theme.md_min_1024}) {
    .svg {
      width: 1.55em;
      height: 1.55em;
    }
  }
`;
