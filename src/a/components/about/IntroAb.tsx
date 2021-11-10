import PP from "../../../img/PP.jpg";
import React from "react";

// Syles
import { theme } from "../../../GlobalStyles";
import styled from "styled-components/macro";

// Component
export const AboutIntro = () => {
  // Template
  return (
    <DivMain>
      <DivContent>
        <DivText>
          <h1>{"About."}</h1>
          <h3>
            {"I am a "}
            <span>{"web <developer>"}</span>
            {" currently based in Bratislava, Slovakia."}
          </h3>
          <h4>
            {"As a former "} <span>{"mechanical engineer, "}</span>
            {"I like "} <span>{"functional "}</span>
            {"and "}
            <span>{"reliable "}</span>
            {"construct. "}
            <span>{"The Same apply "}</span>
            {"for "}
            <span>{"web design "}</span>
            {"& "}
            <span>{"development. "}</span>
          </h4>

          <h4>
            {
              "If not behind a desk coding or maneuvering with pixels, you'll find me "
            }
            <span>{"hiking"}</span>
            {", "}
            <span>{"running "}</span>
            {"around or "}
            <span>{"working out "}</span>
            {"somwhere."}
          </h4>
        </DivText>
        <DivImgMain>
          <DivImg>
            <img className="img" src={PP} alt="profile_picture" />
            {/* <img className="img" src={PPC} alt="bratislava" /> */}
          </DivImg>
        </DivImgMain>
      </DivContent>
    </DivMain>
  );
};

// Styled components:
//ex-eg -> exempli gratia (example)
// e.g.: background: url(&{img}), import img from "./...";
// e.g.: backdrop-filter: blur(5px) makes backround blury
// const DivMain = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   height: 100%;
// `;
// Info section ********************************************************************
//DivIntroSection
const DivMain = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-shadow: ${theme.shadow_intro_l};
  background: ${theme.intro_bg_w};
`;
const DivContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  /* height: 100%; */
  padding: 5em 3em 0;

  @media screen and (${theme.sx_min_425}) {
    max-width: 540px;
  }
  @media screen and (${theme.sm_min_768}) {
    flex-flow: row nowrap;
    justify-content: center;
    max-width: 710px;
    /* width: 90%; */
    text-align: left;
  }
  @media screen and (${theme.md_min_1024}) {
    max-width: 800px;
    padding: 3em 0 0;
  }
  @media screen and (${theme.lg_min_1200}) {
    max-width: 1200px;
    padding: 3em 0 0;
  }
`;

const DivImgMain = styled.div`
  display: flex;
  align-items: flex-end;
  width: 90%;
  max-width: 640px;
`;

const DivImg = styled.div`
  position: relative;
  width: 200px; //auto
  height: 220px; //100%
  margin: 0 auto;
  overflow: hidden;
  .img {
    max-width: 100%;
    max-height: auto;
  }

  @media screen and (${theme.sx_min_425}) {
    width: 300px;
    height: 328px;
  }
  @media screen and (${theme.sm_min_768}) {
    width: 340px;
    height: 388px;
  }
  @media screen and (${theme.md_min_1024}) {
    width: 416px;
    height: 460px;
  }
  @media screen and (${theme.lg_min_1200}) {
    width: 600px;
    height: 680px;
  }
`;

const DivText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin: 0 0 1em;
  span {
    color: black;
    font-weight: 400;
  }

  h1 {
    margin: 0.5em 0 0;
    font-size: 3.4em;
    background: transparent;
  }

  h3 {
    color: ${theme.text_gr_l};
    font-size: 1.8em;
    font-weight: 300;
    margin: 1em 0 0;
  }
  h4 {
    color: ${theme.text_gr_l};
    font-size: 1.25em;
    font-weight: 300;
    margin: 1em 0 0;
  }
  @media screen and (${theme.sm_min_768}) {
    flex-flow: column wrap;
    justify-content: center;
    width: 100%;
    text-align: left;
    align-items: flex-start;
    h3 {
      font-size: 1.5em;
    }
    h4 {
      font-size: 1em;
    }
  }
  @media screen and (${theme.md_min_1024}) {
    h3 {
      font-size: 1.45em;
    }
  }
  @media screen and (${theme.lg_min_1200}) {
    width: 85%;
    h3 {
      font-size: 1.8em;
    }
    h4 {
      font-size: 1.3em;
    }
  }
`;
