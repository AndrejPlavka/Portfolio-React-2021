import { AboutIntro } from "../components/about/IntroAb";
import React from "react";

// Syles
import { Experiences } from "../components/about/ExperiencesAb";
import { Hobbies } from "../components/about/HobbiesAb";
import { Languages } from "../components/about/LanguagesAb";
import { Skills } from "../components/about/SkillsAb";
import {
  animationOne,
  animationThree,
  transition,
} from "../animations/animations";
import { experiences, hobbies, languages, skills } from "../PortfolioData";
import { motion } from "framer-motion";
import { theme } from "../../GlobalStyles";
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
            <DivContentList>
              {experiences.map((experience, index) => (
                <Experiences key={index} experience={experience} />
              ))}
            </DivContentList>
          </DivContent>
        </AboutExperiences>
        <AboutSkills id="skills">
          <DivContent>
            <h2>Skills</h2>
            <DivContentList>
              {skills.map((skill, index) => (
                <Skills key={index} skill={skill} />
              ))}
            </DivContentList>
          </DivContent>
        </AboutSkills>
        <AboutLanguages id="hobbies">
          <DivContent>
            <h2>Languages</h2>
            <DivContentList>
              {languages.map((language, index) => (
                <Languages key={index} language={language} />
              ))}
            </DivContentList>
          </DivContent>
        </AboutLanguages>
        <AboutHobbies id="hobbies">
          <DivContent>
            <h2>Like to do</h2>
            <DivContentList>
              {hobbies.map((hobbie, index) => (
                <Hobbies key={index} hobbie={hobbie} />
              ))}
            </DivContentList>
          </DivContent>
        </AboutHobbies>
      </motion.div>
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
  padding: 0 0 5em;
`;
// Skills section ******************************************************************
// useless delete later  skills &  Experiences both!!!!
const AboutSkills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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

// Skills section ******************************************************************
const AboutLanguages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

// Hobbies section ******************************************************************
const AboutHobbies = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
// General content section ******************************************************************
const DivContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 90%;
  height: 100%;
  max-width: 1200px;
  padding: 6em 0 0;
  text-align: center;
  h2 {
    font-size: 3em;
    padding: 0 0 0.7em;
  }

  @media screen and (${theme.sx_min_425}) {
    width: 95%;
  }
  @media screen and (${theme.sm_min_768}) {
    width: 95%;
  }
  @media screen and (${theme.md_min_1024}) {
    width: 95%;
  }
`;

const DivContentList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1em;
  width: 90%;
`;
