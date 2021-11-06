import PP from "../../../img/PP.jpg";
import React from "react";

// Syles
import styled from "styled-components/macro";

// Component
export const AboutIntro = () => {
  // Template
  return (
    <>
      <DivMain>
        <DivContent>
          <DivText>
            <h1>{"About."}</h1>
            <h3>
              {"I am a "}
              <span>{"web <developer>"}</span>
              {" currently based in Bratislava, Slovakia."}
            </h3>
            <p>
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
            </p>

            <p>
              {
                "If not behind a desk coding or maneuvering with pixels, you'll find me "
              }
              <span>{"hiking"}</span>
              {", "}
              <span>{"running "}</span>
              {"around or "}
              <span>{"working out "}</span>
              {"somwhere."}
            </p>
          </DivText>
          <DivImge className="img">
            <img src={PP} alt="profile-picture" />
          </DivImge>
        </DivContent>
      </DivMain>
    </>
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
  max-height: 90vh;
  padding: 5em 3em 0;

  @media screen and (max-width: 1020px) {
    padding: 4em 3em 0;
    flex-direction: column;
  }
  @media screen and (max-width: 450px) {
    padding: 3em 1.2em 0;
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
  padding: 0 0 6em;
  span {
    color: black;
    font-weight: 400;
  }

  h1 {
    font-size: 4em;
    background: transparent;
    margin-bottom: 30px;
  }

  h3 {
    color: gray;
    font-size: 1.8em;
    font-weight: 300;
    margin-bottom: 20px;
  }
  p {
    color: gray;
    font-size: 1.5em;
    font-weight: 300;
    margin: 15px 0;
  }
  @media screen and (max-width: 1020px) {
    width: 70%;
    padding: 0 0 1em;
  }
  @media screen and (max-width: 780px) {
    width: 90%;
  }
`;
const DivImge = styled.div`
  display: flex;
  width: 500px;
  height: 100%;
  /* height: 100%; */
  img {
    background: transparent;
    left: 0;
    position: relative;
    bottom: 0;
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 1020px) {
    width: 40%;
  }
  @media screen and (max-width: 780px) {
    width: 60%;
  }
`;
