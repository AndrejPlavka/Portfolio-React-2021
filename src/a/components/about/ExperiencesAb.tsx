import { ExpType, experiences } from "../../PortfolioData";
import React from "react";

// Styles:
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
    align-content: center;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 100%;
    margin: 0 5px 0 0;
  }
  span {
    font-size: 1.5em;
    margin: 0 3px;
  }
  p {
    display: none;
  }
  :hover {
    filter: grayscale(0%);
    opacity: 1;
    transition: transform 0.15s linear;
    transform: translateY(3px);
    /* p {
      position: relative;
      display: flex;
      transition: all 0.5s easeInOut;
      -webkit-transition: all 0.7s easeInOut;
      -moz-transition: all 0.7s easeInOut;
      -ms-transition: all 0.7s easeInOut;
      font-size: 1em;
      margin: 0 3px;
    } */
  }
`;
