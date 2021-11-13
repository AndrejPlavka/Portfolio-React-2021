import { Console } from "./components/Console";
import { HackerCode } from "./rsrc/HackerCodeText";
import { useEffect, useState } from "react";

// Styles:
import { animationOne, transition } from "../a/animations/animations";
import { motion } from "framer-motion";
import { theme } from "../GlobalStyles";
import { theme as tht } from "./theme";
import styled from "styled-components/macro";

//Props
interface Props {}

//Component
export const HackerApp = (props: Props) => {
  const [sizeOfText, setSizeOfText] = useState(0);
  //Handlers
  useEffect(
    () => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Delete" || event.key === "Backspace") {
          const newSizeOfText = Math.round(sizeOfText - Math.random() * 8);
          setSizeOfText((P) => (newSizeOfText >= 0 ? newSizeOfText : 0));
        } else {
          const newSize = Math.round(sizeOfText + Math.random() * 8);
          setSizeOfText((P) => newSize);
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    },
    /*This second argument ( we alleays must pass an array) [sizeOfText] 
    tels react to not use effect if certain valuses haven't change between re-renders!!!*/
    [sizeOfText]
  );

  //Template
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
        <DivHackerApp>
          <Console text={HackerCode} numberOfLetters={sizeOfText} />
        </DivHackerApp>
      </motion.div>
    </DivMain>
  );
};

// Styled components:
const DivMain = styled.div`
  .div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const DivHackerApp = styled.div`
  box-sizing: border-box;
  display: block;
  width: 100vw;
  height: calc(100vh - 10em);
  padding: 3em;
  overflow: hidden;
  font-family: monospace;
  font-size: 1em;
  line-height: 1em;
  background-color: ${tht.black};
  color: ${tht.textGreen};
  opacity: 0.85;
  @media screen and (${theme.sx_min_425}) {
    font-size: 0.8em;
    line-height: 1em;
    height: calc(100vh - 9em);
  }
  @media screen and (${theme.md_min_1024}) {
    height: calc(100vh - 8.5em);
    font-size: 0.8em;
    line-height: 1.2em;
  }
`;
