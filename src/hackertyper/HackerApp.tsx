import { Console } from "./components/Console";
import { HackerCode } from "./rsrc/HackerCodeText";
import { useEffect, useState } from "react";

// Styles:
import { IconCancel, IconDelete, IconTerminal } from "../a/assets/icons";
import { theme as ht } from "./theme";
import { motion } from "framer-motion";
import { theme } from "../GlobalStyles";
import styled, { keyframes } from "styled-components/macro";

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
      <DivContent>
        <DivFrame>
          <DivLeft>
            <div>
              <IconTerminal />
            </div>
            <span>Terminal</span>
          </DivLeft>
          <DivRight>
            <div>
              <IconDelete />
            </div>
          </DivRight>
        </DivFrame>
        <DivHackerApp>
          <Console text={HackerCode} numberOfLetters={sizeOfText} />
        </DivHackerApp>
      </DivContent>
    </DivMain>
  );
};

// Styled components:
const fadeIn = keyframes`
0% {opacity: 0}
100% {opacity: 1}
`;

const DivMain = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: ${ht.backgroundPrimary};
  animation: 1s ${fadeIn} forwards;
  @media screen and (${theme.sx_min_425}) {
    max-width: 46em;
    padding: 4em 3em;
    color: ${ht.textPrimary};
  }
`;

const DivContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  @media screen and (${theme.sx_min_425}) {
    width: 80%;
    border: 1px solid black;
  }
`;
// Div frame****************************************************
const DivFrame = styled.div`
  justify-content: flex-start;
  align-items: center;
  height: 1.75em;
  width: 100%;
  display: none;
  @media screen and (${theme.sx_min_425}) {
    display: flex;
  }
`;
const DivLeft = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  padding: 0 0.5em;
  font-family: arial, sans-serif;
  font-size: 0.75em;
  font-weight: 300;
  div {
    display: flex;
    align-items: center;
    width: 1.25em;
    height: auto;
    margin-right: 0.5em;
  }
`;
const DivRight = styled(DivLeft)`
  justify-content: flex-end;
  div {
    margin: 0;
    width: 1em;
  }
`;
//****************************************************
const DivHackerApp = styled.div`
  box-sizing: border-box;
  display: block;
  width: 100vw;
  height: calc(100vh - 9em);
  padding: 3em;
  overflow: hidden;
  font-family: monospace;
  font-size: 1em;
  line-height: 1.2em;
  background-color: ${ht.black};
  color: ${ht.textGreen};
  opacity: 0.85;
  @media screen and (${theme.sx_min_425}) {
    width: 100%;
    height: 26em;
    padding: 2em 1em;
    font-size: 0.75em;
    line-height: 1.2em;
  }
`;
