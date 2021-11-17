import { ImgSrc } from "./ModalBackground";
import React, { useRef } from "react";
// Styled:
import { theme as mg } from "../theme";
import { theme } from "../../GlobalStyles";
import styled, { keyframes } from "styled-components/macro";

// Styled components:
const fadeIn = keyframes`
0% {opacity: 0}
100% {opacity: 1}
`;

const DivBackdrop = styled.div`
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  animation: 1s ${fadeIn} forwards;
`;

const DivWrapper = styled.div`
  z-index: 3;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  width: 90%;
  max-width: 26em;
  border: 1px solid black;
  border-radius: 3px;
  text-align: center;
  object-fit: contain;
  background-position: center;
  background-image: url(${ImgSrc});
  background-repeat: no-repeat;
  background-size: cover;

  img {
    width: 100%;
    object-fit: contain;
    height: auto;
    margin: 0 auto;
    border-radius: 10px;
    background: ${mg.backgroundPrimary};
  }

  button {
    padding: 0.75em 1em;
    border-radius: 4px;
    border: none;
    margin: 0.5em 0 1em;
    background: ${mg.backgroundSecondary};
    color: ${mg.textSecondary};
    font-size: 2em;
    cursor: pointer;
    opacity: 0.92;
    :hover {
      opacity: 1;
    }
  }
`;
const DivScore = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
`;

const DivMoves = styled.div`
  margin: 0.5em;
  font-weight: 400;
  font-size: 1.5em;
  color: ${mg.errorColor};
`;

const DivTitle = styled.div`
  margin: 0.5em;
  font-weight: 700;
  font-size: 3em;
  color: ${mg.errorColor};
`;

type Props = {
  handleReset: () => void;
  // setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
  moves: number;
  matchedPairs: number;
};

// Component:
export const ModalContent = ({
  handleReset,
  moves,
  matchedPairs,
  onClose,
}: Props) => {
  const backDropRef = useRef(null);

  const handleCloseOnOverlay = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (e.target === backDropRef.current) {
      onClose();
    }
  };
  // Template:
  return (
    <DivBackdrop ref={backDropRef} onClick={handleCloseOnOverlay}>
      <DivWrapper>
        <DivTitle>{"You've finished the Game!"}</DivTitle>

        <DivScore>
          <DivMoves>
            <span>Moves:</span> {moves}
          </DivMoves>
        </DivScore>

        <button type="button" onClick={handleReset}>
          <span>New Game</span>
        </button>
      </DivWrapper>
    </DivBackdrop>
  );
};
