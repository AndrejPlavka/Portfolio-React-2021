import { ImgSrc } from "./ModalBackground";
import React, { useRef } from "react";
import styled from "styled-components/macro";

const DivBackdrop = styled.div`
  z-index: 3;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.6);
`;

const DivWrapper = styled.div`
  z-index: 3;
  position: fixed;
  width: 40vw;
  height: 35vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  top: 23%;
  border: 1px solid black;
  border-radius: 3px;
  text-align: center;
  object-fit: contain;
  background-position: center;
  background-image: url(${ImgSrc});
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 600px) {
    min-width: 600px;
  }

  img {
    width: 100%;
    object-fit: contain;
    height: auto;
    border-radius: 10px 0 0 10px;
    background: #000;
  }

  button {
    min-width: 100px;
    padding: 16px 32px;
    border-radius: 4px;
    border: none;
    background: #141414;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
  }
`;
const DivScore = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 50px 70px;
  border-radius: 3px;
  background-color: transparent;
  color: white;
  box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.151);
`;

const DivMoves = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

const DivTitle = styled.div`
  font-weight: bold;
  font-size: 50px;
`;

type Props = {
  handleReset: () => void;
  // setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
  moves: number;
  matchedPairs: number;
};

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

  return (
    <DivBackdrop ref={backDropRef} onClick={handleCloseOnOverlay}>
      <DivWrapper>
        <DivTitle>{"You've finished the Game!"}</DivTitle>

        <DivScore>
          <DivMoves>
            <span>Moves:</span> {moves}
          </DivMoves>
          <DivMoves>
            <span>Matched:</span> {matchedPairs}/8
          </DivMoves>
        </DivScore>

        <button type="button" onClick={handleReset}>
          <span>New Game</span>
        </button>
      </DivWrapper>
    </DivBackdrop>
  );
};
