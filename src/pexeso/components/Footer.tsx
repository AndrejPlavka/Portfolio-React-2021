import React from "react";
import styled from "styled-components";

// Styles
const Footer = styled.footer`
  background-color: white;
  border-radius: 4px;
  width: 26.6rem;
  position: relative;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 4px;
`;

const DivScore = styled.div`
  background-color: white;
  color: black;
  box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.151);
  justify-content: space-between;
  display: flex;
  padding: 8px 20px;
  border-radius: 3px;
`;

const DivMoves = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

const Span = styled.span`
  background-color: white;
`;

const DivReset = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ResetButton = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 16px 32px;
  border-radius: 3px;
  border: none;
  background: #141414;
  color: #fff;
  box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.151);
  font-size: 24px;
  cursor: pointer;
`;
interface Props {
  matchedPairs: number;
  moves: number;
  handleReset(): void;
}

export const PexesoFooter = ({ matchedPairs, moves, handleReset }: Props) => {
  return (
    <Footer>
      <DivScore>
        <DivMoves>
          <Span>Moves:</Span> {moves}
        </DivMoves>
        <DivMoves>
          <Span>Matched:</Span> {matchedPairs}/8
        </DivMoves>
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
