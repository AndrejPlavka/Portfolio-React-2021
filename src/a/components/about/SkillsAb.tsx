import { SkillType, skills } from "../../PortfolioData";
import React from "react";

// Styles:
import styled from "styled-components/macro";

interface Props {
  skill: SkillType;
}

export const Skills = (props: Props) => {
  const { skill } = props;
  if (!skills.length) return null;

  // Template:
  return (
    <DivMain>
      <div>{skill.img}</div>
      <span>{skill.name}</span>
      <span>/</span>
      <span>{skill.level}</span>
    </DivMain>
  );
};

const DivMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0.6em;
  border-radius: 2px;
  background: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  filter: grayscale(100%);
  opacity: 0.65;
  div {
    display: flex;
    width: 40px;
    height: 100%;
    margin: 0 5px 0 0;
  }
  span {
    font-size: 2em;
    margin: 0 3px;
  }
  :hover {
    filter: grayscale(0%);
    opacity: 1;
    transition: transform 0.15s linear;
    transform: translateY(3px);
  }
`;
