import { ProjectType } from "../../PortfolioData";

// styles
import { Link } from "react-router-dom";

import { theme } from "../../../GlobalStyles";
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
        <h3>{project.name}</h3>
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
  width: 90%;
  height: 20em;
  padding: 0 0.5em;
  margin-bottom: 2em;
  border-radius: 2.5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: transform 0.2s linear;
  :hover {
    transform: translateY(-7px);
  }
  //!!!!!!!!!!!!!!!!!!!!! flex-basis => width

  @media screen and (${theme.sx_min_425}) {
    width: 80%;
  }
  @media screen and (${theme.sm_min_768}) {
    /* flex-basis: 45%; */
    width: 45%;
  }
  @media screen and (${theme.md_min_1024}) {
    width: 30%;
    height: 20em;
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
  @media screen and (${theme.md_min_1024}) {
    width: 1.5em;
  }
`;
const LinkDemo = styled(Link)`
  opacity: 0.5;
  color: black;
  text-decoration: none;
  font-size: 0.8em;
  &:hover {
    opacity: 1;
  }
`;

const DivContent = styled.div`
  background: gray;
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  padding: 0.6em;
  border-radius: 2px;
  /* text-align: center; */
  p {
    font-size: 1.2em;
    opacity: 0.65;
    &:hover {
      opacity: 1;
    }
  }
  @media screen and (${theme.md_min_1024}) {
    p {
      font-size: 1em;
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
    width: 1.9em;
    margin: 0 0.45em 0 0;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
  @media screen and (${theme.md_min_1024}) {
    div > div {
      width: 1.55em;
    }
  }
`;
