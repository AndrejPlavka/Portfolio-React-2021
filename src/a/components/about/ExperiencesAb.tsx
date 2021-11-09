import { ExpType, experiences } from "../../PortfolioData";
import React from "react";

// Styles:
import { theme } from "../../../GlobalStyles";
import styled from "styled-components/macro";

interface Props {
  experience: ExpType;
}

export const Experiences = (props: Props) => {
  const { experience } = props;
  if (!experiences.length) return null;

  // Template:
  return (
    <DivMain>
      <div>{experience.img}</div>
      <span>{experience.name}</span>
      <br />
      <p>{experience.text}</p>
    </DivMain>
  );
};

const DivMain = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;
  padding: 0.6em;
  border-radius: 2px;
  background: ${theme.box_bg_w};
  box-shadow: ${theme.shadow_box_l};
  filter: grayscale(100%);
  opacity: 0.65;
  div {
    display: flex;
    width: 2.5em;
    height: 2.5em;
    margin: 0 5px 0 0;
  }
  span {
    font-size: 1.25em;
    margin: 0 0.1em;
  }
  p {
    display: none;
  }
  :hover {
    filter: grayscale(0%);
    opacity: 1;
    transition: transform 0.15s linear;
    transform: translateY(3px);
  }
  /* @media screen and (${theme.sx_min_425}) {
  }
  @media screen and (${theme.sm_min_768}) {
  }
  @media screen and (${theme.md_min_1024}) {
  } */
`;
