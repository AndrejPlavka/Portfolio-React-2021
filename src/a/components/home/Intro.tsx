import React from "react";
import styled from "styled-components/macro";

interface Props {}

export const Intro = (props: Props) => {
  return <DivIntro id="intro">{"jebohlav pomaly"}</DivIntro>;
};

// styled componets:
const DivIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
  width: 100%;
  padding-top: 10em;
`;
