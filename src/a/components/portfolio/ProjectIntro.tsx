import React from "react";
// Styles:
import { IconReact } from "../../assets/icons";
import { theme } from "../../../GlobalStyles";
import styled from "styled-components/macro";

// Component:
export const ProjectIntro = () => {
  // Template:
  return (
    <DivMain>
      <DivContent>
        <DivText>
          <h1>Portfolio.</h1>
          <h2>Here you can check out some of my latest work.</h2>
          <p>
            You can find here some of the projects I’ve been working on while
            practicing my skills as part of completing various programming
            courses ( Udemy, L2C, ITA ).
          </p>
          <p>
            The projects are mainly focused on React and Typescript. Other
            programming languages and tools used are listed at the bottom of
            each project.
          </p>
        </DivText>
        <DivImgMain>
          <DivImg>
            <div className="img">
              <IconReact />
            </div>
          </DivImg>
        </DivImgMain>
      </DivContent>
    </DivMain>
  );
};

// Styled components:
const DivMain = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-shadow: ${theme.shadow_intro_l};
`;
const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  padding: 5em 3em;

  @media screen and (${theme.sx_min_425}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const DivText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  line-height: 1.5;
  h1 {
    margin: 0.5em 0 0;
    font-size: 3.5em;
  }
  h2 {
    margin: 0.7em 0 0.5em;
    font-size: 1.8em;
    font-family: Roboto;
    font-weight: 300;
  }
  p {
    font-weight: 300;
    font-size: 1.25em;
    margin: 0.5em 0;
  }

  @media screen and (${theme.sx_min_425}) {
  }
  @media screen and (${theme.sm_min_768}) {
    width: 60%;
  }
  @media screen and (${theme.md_min_1024}) {
    width: 50%;
  }
  @media screen and (${theme.lg_min_1200}) {
  }
`;

const DivImgMain = styled.div`
  display: none;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 100%;
  @media screen and (${theme.sm_min_768}) {
    display: flex;
  }
`;

const DivImg = styled.div`
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  width: 280px;
  .img {
    align-self: center;
    margin: 0 auto;
    /* width: 100%;
    height: 100%; */
  }
  @media (prefers-reduced-motion: no-preference) {
    animation: IconReact infinite 60s linear;
  }
  @keyframes IconReact {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @media screen and (${theme.md_min_1024}) {
    width: 440px;
  }
  @media screen and (${theme.lg_min_1200}) {
    width: 440px;
  }
`;
