import { AboutIntro } from "../components/about/IntroAb";
import React from "react";

// Syles
import { Experiences } from "../components/about/ExperiencesAb";
import { Skills } from "../components/about/SkillsAb";
import {
  animationOne,
  animationThree,
  transition,
} from "../animations/animations";
import { experiences, skills } from "../PortfolioData";
import { motion } from "framer-motion";
import styled from "styled-components/macro";

// Component
export const About = () => {
  // Template
  return (
    <DivMain>
      <motion.div
        className="div"
        initial="start"
        animate="in"
        exit="end"
        variants={animationThree}
        transition={transition}
      >
        <AboutIntro />
        <AboutExperiences id="exp">
          <DivContent>
            <h2>Experiences</h2>
            <div>
              {experiences.map((experience, index) => (
                <div key={index}>
                  <Experiences experience={experience} />
                </div>
              ))}
            </div>
          </DivContent>
        </AboutExperiences>
        <AboutSkills id="skills">
          <DivContent>
            <h2>Skills</h2>
            <div>
              {skills.map((skill, index) => (
                <div key={index}>
                  <Skills skill={skill} />
                </div>
              ))}
            </div>
          </DivContent>
        </AboutSkills>
      </motion.div>
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
  align-items: center;
  width: 100%;
  min-height: 100vh;
  .div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;
// Skills section ******************************************************************
const AboutSkills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  padding: 6em 3em;
  text-align: center;
  h2 {
    font-size: 4em;
    padding: 2em 0.6em 1em;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 0.6em;
  }
  @media screen and (max-width: 1128px) {
    padding: 5em 3em;
  }
  @media screen and (max-width: 780px) {
    justify-content: center;
  }
  @media screen and (max-width: 450px) {
    justify-content: center;
    padding: 4em 0.5em;
  }
`;
// Skills section ******************************************************************
const AboutExperiences = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

// const DivContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   max-width: 1300px;
//   padding: 6em 3em;
//   text-align: center;
//   /* background: lightcoral; */
//   h2 {
//     font-size: 4em;
//     padding: 2em 0.6 1em;
//   }
//   div {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     align-items: center;
//     gap: 10px;
//     padding: 0.6em;
//   }
//   @media screen and (max-width: 1128px) {
//     padding: 5em 3em;
//   }
//   @media screen and (max-width: 780px) {
//     justify-content: center;
//   }
//   @media screen and (max-width: 450px) {
//     justify-content: center;
//     padding: 4em 0.5em;
//   }
// `;
