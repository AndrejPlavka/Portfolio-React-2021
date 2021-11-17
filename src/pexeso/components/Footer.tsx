import React from "react";

// Styles:
import { theme as mg } from "../theme";
import styled from "styled-components/macro";

// Styled components:
const Footer = styled.footer`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  align-items: center;
  margin: 1.5em 0;
  background: ${mg.backgroundPrimary};
`;

const DivScore = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  background: ${mg.backgroundPrimary};
  color: ${mg.textPrimary};
  box-shadow: ${mg.shadow_btn1};
  border-radius: ${mg.borderRadius};
`;

const DivMoves = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 35%;
  padding: 0.5em;
  font-size: 1.5em;
  font-weight: 400;
  span {
    margin-right: 0.25em;
    background: ${mg.backgroundPrimary};
  }
`;
const DivMatched = styled(DivMoves)`
  justify-content: flex-end;
`;

const DivReset = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ResetButton = styled.button`
  width: 100%;
  margin-top: 0.5em;
  padding: 0.5em 1em;
  font-size: 1.75em;
  border-radius: ${mg.borderRadius};
  border: none;
  background: ${mg.backgroundSecondary};
  color: ${mg.textSecondary};
  cursor: pointer;
  box-shadow: ${mg.shadow_btn1};
  transition: 100ms linear;
  :hover {
    opacity: 1;
    transform: translateY(2px);
  }
`;
interface Props {
  matchedPairs: number;
  moves: number;
  handleReset(): void;
}

// Component:
export const PexesoFooter = ({ matchedPairs, moves, handleReset }: Props) => {
  return (
    <Footer>
      <DivScore>
        <DivMoves>
          <span>Moves:</span> {moves}
        </DivMoves>
        <DivMatched>
          <span>Matched:</span> {matchedPairs}/8
        </DivMatched>
      </DivScore>
      <DivReset>
        <ResetButton onClick={handleReset}>New Game</ResetButton>
      </DivReset>
    </Footer>
  );
};

// Work in progress
// {localStorage.getItem("bestScore") && (
//   <DivBestScore>
//     <Span className="bold">Best Score:</Span> {bestScore}
//   </DivBestScore>
// )}
