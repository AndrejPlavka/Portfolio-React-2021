import PP from "../../../img/PP.jpg";
import ProfilePicture from "../../../img/ProfilePicture.png";
import React from "react";
import styled from "styled-components/macro";

export const Intro = () => {
  return (
    <DivMain>
      <DivIntroSection>
        <DivContent>
          {/* <div>
          <img src={ProfilePicture} alt="bratislava" />
        </div> */}

          <DivText>
            <h1>{"Hi, I'm Andrej."}</h1>
            <h3>
              {"I am a fromer mechanical engineer & present"}
              <span>{" front-end web <developer>"}</span>
              {" currently based in Bratislava, Slovakia."}
            </h3>
            <p>
              {"Lets create some"} <span>{" practical "}</span>
              {"&"} <span>{"uniqe"}</span>
              {" projets "}
              <span>{"togather"}</span>
            </p>
          </DivText>
          <div>
            <img src={PP} alt="bratislava" />
          </div>
        </DivContent>
      </DivIntroSection>
      {/* <DivPreviewSection></DivPreviewSection> */}
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
`;
const DivIntroSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-shadow: 0 3px 5px -3px rgba(57, 63, 72, 0.3);
  background: white;
`;
const DivContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  max-width: 1300px;
  width: 100%;
  max-height: 100vh;
  padding: 6em 3em 0;

  div {
    display: flex;
    width: 500px;
    height: 100%;
    img {
      background: transparent;
      left: 0;
      position: relative;
      bottom: 0;
      max-width: 100%;
      height: auto !important;
    }
  }
  @media screen and (max-width: 1128px) {
    padding: 5em 3em;
  }
  @media screen and (max-width: 450px) {
    padding: 4em 1.2em;
    flex-direction: column;
  }
`;

const DivText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  align-items: flex-start;
  width: 40%;
  span {
    color: black;
    font-weight: 400;
  }

  h1 {
    font-size: 5em;
    background: transparent;
    margin-bottom: 30px;
  }

  h3 {
    color: gray;
    font-size: 2em;
    font-weight: 300;
    margin-bottom: 30px;
  }
  p {
    color: gray;
    font-size: 2em;
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
