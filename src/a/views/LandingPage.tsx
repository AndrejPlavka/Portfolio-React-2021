import { Intro } from "../components/landing-page/IntroLP";
import { ProjectPreview } from "../components/landing-page/ProjectPreview";

// Styles:
import {
  animationOne,
  animationThree,
  transition,
} from "../animations/animations";
import { motion } from "framer-motion";
import styled from "styled-components/macro";

// Component:
export const LandingPage = () => {
  // Template:
  return (
    <DivMain>
      <motion.div
        className="div"
        initial="start"
        animate="in"
        exit="end"
        variants={animationOne}
        transition={transition}
      >
        <Intro />
        <ProjectPreview />
      </motion.div>
    </DivMain>
  );
};

// Styled components:
const DivMain = styled.div`
  display: flex;
  align-items: center;
  min-height: 100%;
  width: 100%;
  .div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
  }
`;
// from: { opacity: 0, transform: "translate(100%, 0)" },
// enter: { opacity: 1, transform: "translate(0%, 0)" },
// leave: { opacity: 0, transform: "translate(-50%, 0)" }
