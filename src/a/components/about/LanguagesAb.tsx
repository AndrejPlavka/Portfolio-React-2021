import { HobbiesType, languages } from "../../PortfolioData";
import React from "react";

// Styles:
import { theme } from "../../../GlobalStyles";
import styled from "styled-components/macro";

interface Props {
  language: HobbiesType;
}
// Component:
export const Languages = (props: Props) => {
  const { language } = props;
  if (!languages.length) return null;

  // Template:
  return (
    <DivMain>
      <div>{language.img}</div>
      <span>{language.name}</span>
      <span>/</span>
      <span>{language.level}</span>
    </DivMain>
  );
};

// styled components:
const DivMain = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 0.6em;
  border-radius: 2px;
  background: ${theme.box_bg_w};
  box-shadow: ${theme.shadow_box_l};
  filter: grayscale(100%);
  opacity: 0.65;
  div {
    width: 2em;
    height: 2em;
    margin: 0 5px 0 0;
  }
  span {
    font-size: 1.25em;
    margin: 0 0.1em;
  }
  :hover {
    filter: grayscale(0%);
    opacity: 1;
    transition: transform 0.15s linear;
    transform: translateY(3px);
  }
`;
