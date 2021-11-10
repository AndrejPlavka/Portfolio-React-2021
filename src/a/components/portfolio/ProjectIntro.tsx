import React from "react";
// Styles:
// import { PortfolioIntro } from "../../PortfolioData";
import { IconReact } from "../../assets/icons";
import { theme } from "../../../GlobalStyles";
import styled from "styled-components/macro";
// import ReactSpin

export const ProjectIntro = () => {
  return (
    <DivMain>
      <DivContent>
        <DivText>
          <h1>Portfolio.</h1>
          <h2>Here you can chceck out some of my latest work.</h2>
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
  width: 100%; // 100%
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  line-height: 1.5;
  /* //padding: 0 0 0.6em; */
  h1 {
    margin: 0.5em 0 0;
    font-size: 3.5em; //4em
  }
  h2 {
    margin: 0.7em 0 0.5em;
    font-size: 1.8em; //2em
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
  /* height: 100%; */
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  width: 280px;
  .img {
    display: flex;
    align-self: center;
    margin: 0 auto;
    width: 100%;
    height: 100%;
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

// Styled components:
// const DivMain = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   height: 100%;
//   box-shadow: ${theme.shadow_intro_l};
// `;
// const DivContent = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-end;
//   align-items: center;
//   max-width: 1300px;
//   width: 100%;
//   padding: 5em 3em;
//   @media screen and (max-width: 1128px) {
//     padding: 5em 3em;
//   }
//   @media screen and (max-width: 450px) {
//     padding: 4em 1.2em;
//     flex-direction: column;
//   }
// `;

// const DivText = styled.div`
//   width: 50%;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   flex-wrap: wrap;
//   line-height: 1.5;
//   h1 {
//     margin: 0.5em 0 0;
//     font-size: 4.5em;
//   }
//   h2 {
//     margin-bottom: 0.5em;
//     font-size: 2.25em;
//     font-family: Roboto;
//     font-weight: 300;
//   }
//   p {
//     font-weight: 300;
//     font-size: 1.25em;
//     margin: 0.5em 0;
//   }
//   @media screen and (max-width: 900px) {
//     width: 100%;
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
// `;

// const DivImg = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: row;
//   align-content: center;
//   div {
//     align-self: center;
//     width: 400px;
//     height: 300px;
//   }

//   /* @media (prefers-reduced-motion: no-preference) {
//     animation: IconReact infinite 80s linear;
//   }
//   @keyframes IconReact {
//     from {
//       transform: rotate(0deg);
//     }
//     to {
//       transform: rotate(360deg);
//     }
//   } */
//   @media screen and (max-width: 900px) {
//     display: none;
//   }
// `;
