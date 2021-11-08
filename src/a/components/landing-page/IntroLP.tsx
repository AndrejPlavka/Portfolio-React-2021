import { theme } from "../../../GlobalStyles";
import PP from "../../../img/PP.jpg";
import PPC from "../../../img/PPC.png";
import ProfilePicture from "../../../img/ProfilePicture.png";
import React from "react";
import styled from "styled-components/macro";

export const Intro = () => {
  return (
    <DivMain>
      <DivContent>
        <DivText>
          <h1>{"Hi, I'm Andrej."}</h1>
          <h3>
            {"I am a fromer mechanical engineer & present"}
            <span>{" front-end web <developer>"}</span>
            {" currently based in Bratislava, Slovakia."}
          </h3>
          <h4>
            {"Lets create some"} <span>{" practical "}</span>
            {"&"} <span>{"uniqe"}</span>
            {" projets "}
            <span>{"togather"}</span>
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
  width: 95%;
  height: 100%;
  padding: 5em 0 0;

  @media screen and (${theme.sx_min_425}) {
    max-width: 540px;
  }
  @media screen and (${theme.sm_min_768}) {
    flex-flow: row nowrap;
    justify-content: center;
    max-width: 710px;
    width: 90%;
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
  max-width: 640px; /// !!!!!!!!! check with min 1200 later
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
  align-items: center;
  align-content: center;
  width: 90%;
  text-align: center;
  /* text-justify: inter-character; */
  /* text-align: center; */
  span {
    color: ${theme.text_bl_s};
    font-weight: 400;
  }

  h1 {
    font-size: 3.4em;
    background: transparent;
  }

  h3 {
    color: ${theme.text_gr_l};
    font-size: 2em;
    font-weight: 300;
    margin: 1em 0;
  }
  h4 {
    color: ${theme.text_gr_l};
    font-size: 1.5em;
    font-weight: 300;
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
// const DivInfoContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: stretch;
//   justify-content: center;
//   max-width: 1300px;
//   width: 100%;
//   padding: 6em 3em;
//   @media screen and (max-width: 1128px) {
//     padding: 5em 3em;
//   }
//   @media screen and (max-width: 450px) {
//     padding: 4em 1.2em;
//     flex-direction: column;
//   }
// `;
// // Text area:  *****************************
// const DivTextSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: stretch;
//   align-content: stretch;
//   flex-wrap: wrap;
//   padding: 1em 0 1em 0;
//   text-align: center;
//   line-height: 1.5;
//   h1 {
//     font-size: 5em;
//   }
//   h2 {
//     margin-bottom: 0.5em;
//     font-size: 2.25em;
//     font-family: Roboto;
//     font-weight: 300;
//   }
//   p {
//     text-align: center;
//     font-weight: 300;
//     font-size: 1.25em;
//   }
//   @media screen and (max-width: 450px) {
//     padding: 0 0.6em;
//     h1 {
//       font-size: 4em;
//     }
//     h2 {
//       font-size: 2em;
//     }
//     p {
//       font-size: 1.25em;
//     }
//   }
//   @media screen and (max-width: 375px) {
//     padding: 0 0.6em;
//   }
// `;

const DivPreviewSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
  width: 100%;
  padding-top: 10em;
`;
