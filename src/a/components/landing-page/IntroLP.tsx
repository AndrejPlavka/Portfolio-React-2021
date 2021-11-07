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
  box-shadow: ${theme.shadow_intro_s};
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
  //max-width: 1300px;
  //width: 100%;
  //max-height: 100vh;
  //padding: 6em 3em 0;
  //@media screen and (max-width: 1128px) {
  //  padding: 5em 3em;
  //}
  //@media screen and (max-width: 450px) {
  //  padding: 4em 1.2em;
  //  flex-direction: column;
  //}
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
    color: black;
    font-weight: 400;
  }

  h1 {
    font-size: 3.5em;
    background: transparent;
    margin-bottom: 1em;
  }

  h3 {
    color: gray;
    font-size: 2em;
    font-weight: 300;
    margin-bottom: 1.5em;
  }
  h4 {
    color: gray;
    font-size: 1.5em;
    font-weight: 300;
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
