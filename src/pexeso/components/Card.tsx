import { CardType } from "./CardSetup";
import React from "react";
import styled from "styled-components";

// Styles
export const DivWrapper = styled.div`
  position: relative;
  .front.flipped {
    z-index: 1;
    transform: rotateY(180deg);
  }
`;

export const FrontImg = styled.img<cardState>`
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  backface-visibility: hidden;
  cursor: pointer;
  transform-style: preserve-3d;
  z-index: ${(p) => (p.flipped ? 2 : 1)};
  transform: ${(p) => (p.flipped ? "rotate(0deg)" : "rotateY(180deg)")};
`;

export const BackImg = styled.img<cardState>`
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
  backface-visibility: hidden;
  cursor: pointer;
  transform-style: preserve-3d;
  z-index: ${(p) => (p.flipped ? 1 : 2)};
  transform: ${(p) => (p.flipped ? "rotateY(180deg)" : "rotate(360deg)")};
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 2px;
  box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.151);
  &:hover {
    box-shadow: 0px 0px 5px 1px rgba(3, 51, 32, 0.48);
  }
`;

// Type
type cardState = {
  flipped: boolean;
};

type Props = {
  card: CardType;
  callback: (card: CardType) => void;
};

export const Card = ({ card, callback }: Props) => {
  const handleClick = () => {
    if (card.clickable) callback(card);
  };

  return (
    <DivWrapper onClick={handleClick}>
      <FrontImg flipped={card.flipped} src={card.frontImage} alt="card-front" />
      <BackImg flipped={card.flipped} src={card.backImage} alt="card-back" />
    </DivWrapper>
  );
};
