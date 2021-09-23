import { Console } from "./components/Console";
import { HackerCode } from "./rsrc/HackerCodeText";
import { theme } from "./theme";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

//Styled-components
const DivHackerApp = styled.div`
  font-family: monospace;
  color: ${theme.textGreen};
  font-size: 1.1em;
  line-height: 1.4em;
  bottom: 0;
  margin: auto;
  margin-top: 5rem;
  border: 2px black gray;
  border-radius: 5px;
  top: 0;
  width: 70vw;
  height: 70vh;
  box-sizing: border-box;
  background-color: ${theme.black};
  display: block;
  overflow: hidden;
  opacity: 0.85;
`;

//Props
interface Props {}

//Component - Hooks
export const HackerApp = (props: Props) => {
  const [sizeOfText, setSizeOfText] = useState(0);
  //Handlers
  useEffect(
    () => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Delete" || event.key === "Backspace") {
          const newSizeOfText = Math.round(sizeOfText - Math.random() * 8);
          setSizeOfText((prevSizeOfText) =>
            newSizeOfText >= 0 ? newSizeOfText : 0
          );
        } else {
          const newSize = Math.round(sizeOfText + Math.random() * 8);
          setSizeOfText((prevSizeOfText) => newSize);
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
    <DivHackerApp>
      <Console text={HackerCode} numberOfLetters={sizeOfText} />
    </DivHackerApp>
  );
};

export default HackerApp;
