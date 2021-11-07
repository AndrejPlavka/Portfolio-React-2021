import { ProjectIntro } from "../components/portfolio/ProjectIntro";
import { ProjectList } from "../components/portfolio/ProjectList";
import React from "react";
// styles:
import {
  animationOne,
  animationThree,
  transition,
} from "../animations/animations";
import { motion } from "framer-motion";
import styled from "styled-components/macro";

// Component
export const Portfolio = () => {
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
        <ProjectIntro />
        <ProjectList />
      </motion.div>
    </DivMain>
  );
};

// Styled compoentns:
const DivMain = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: black;
  .div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    color: black;
  }
`;
