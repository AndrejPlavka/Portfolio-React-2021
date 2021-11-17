import { Card } from "./components/Card";
import { CardType } from "./components/CardSetup";
import { ImgSrc } from "./modal/ModalBackground";
import { Modal } from "./modal/Modal";
import { ModalContent } from "./modal/ModalContent";
import { PexesoFooter } from "./components/Footer";
import { createBoard } from "./components/CardSetup";
import { shuffleArray } from "./components/CardSetup";
import { useEffect, useState } from "react";

// Styles:
import { theme as mg } from "./theme";
import { theme } from "../GlobalStyles";
import styled, { keyframes } from "styled-components/macro";

// Component:
export const PexesoApp = () => {
  // eslint-disable-next-line prettier/prettier
  const [clickedCard, setClickedCard] = useState<undefined | CardType>(undefined);
  const [cards, setCards] = useState<CardType[]>(shuffleArray(createBoard()));
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [moves, setMoves] = useState(0);
  const [count, setCount] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      setGameWon(true);
      if (gameWon) {
        setShowModal(true);
      }
    }
  }, [matchedPairs, gameWon]);

  const handleCardClick = (currentClickedCard: CardType) => {
    // Flip the card
    setCards((prev) =>
      prev.map((card) =>
        card.id === currentClickedCard.id
          ? { ...card, flipped: true, clickable: false }
          : card
      )
    );

    // Moves counter
    setCount((prev) => prev + 1);

    if (count < 1) {
      setMoves(0);
    } else if (count % 2 !== 0) {
      setMoves((count + 1) / 2);
    }

    // If this is the first card that is flipped, keep it flipped
    if (!clickedCard) {
      setClickedCard({ ...currentClickedCard });
      return;
    }

    // If it's a match
    if (clickedCard.matchingCardId === currentClickedCard.id) {
      setMatchedPairs((prev) => prev + 1);
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, clickable: false }
            : card
        )
      );
      // Return to prev state undefined - unclicted
      setClickedCard(undefined);
      return;
    }
    // If it's not a matched pair, flip them back in one second
    setTimeout(() => {
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, flipped: false, clickable: true }
            : card
        )
      );
    }, 1000);

    setClickedCard(undefined);
  };

  const handleReset = () => {
    setCards(shuffleArray(createBoard()));
    setMoves(0);
    setCount(0);
    setClickedCard(undefined);
    setMatchedPairs(0);
    setCount(0);
    setGameWon(false);
    setShowModal(false);
  };

  // Templete:
  return (
    <DivMain>
      <DivContent>
        <DivGrid>
          {cards.map((card) => (
            <Card key={card.id} card={card} callback={handleCardClick} />
          ))}
        </DivGrid>
        <PexesoFooter
          matchedPairs={matchedPairs}
          moves={moves}
          handleReset={handleReset}
        />
        {/* <button type="button" onClick={() => setShowModal(true)}>
          <span>Open Modal</span>
        </button> */}

        <DivModal>
          <Modal showModal={showModal}>
            <ModalContent
              handleReset={handleReset}
              matchedPairs={matchedPairs}
              moves={moves}
              onClose={() => setShowModal(false)}
            />
          </Modal>
        </DivModal>
      </DivContent>
    </DivMain>
  );
};

// Styled components:
const fadeIn = keyframes`
0% {opacity: 0}
100% {opacity: 1}
`;

const DivMain = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: ${mg.textPrimary};
  background: ${mg.backgroundPrimary};
  animation: 1s ${fadeIn} forwards;
`;
const DivContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 25.5em;
  padding: 5em 3em;
  @media screen and (${theme.sx_min_425}) {
    font-size: 12px;
  }
  @media screen and (${theme.sm_min_768}) {
    font-size: 14px;
  }

  @media screen and (${theme.md_min_1024}) {
    font-size: 16px;
  }
`;

// 4x4 grid pexeso card board
export const DivGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 6em);
  grid-template-rows: repeat(4, 6em);
  grid-gap: 0.5em;
`;

const DivModal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
`;
