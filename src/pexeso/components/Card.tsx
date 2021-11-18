import { CardType } from "./CardSetup";

// Styles
import { theme as mg } from "../theme";
import styled from "styled-components/macro";

// Styled components:
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
  position: absolute;
  transition: all 0.5s ease;
  backface-visibility: hidden;
  cursor: pointer;
  transform-style: preserve-3d;
  z-index: ${(p) => (p.flipped ? 2 : 1)};
  transform: ${(p) => (p.flipped ? "rotate(0deg)" : "rotateY(180deg)")};
`;

export const BackImg = styled.img<cardState>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  transition: all 0.5s ease;
  backface-visibility: hidden;
  cursor: pointer;
  transform-style: preserve-3d;
  z-index: ${(p) => (p.flipped ? 1 : 2)};
  transform: ${(p) => (p.flipped ? "rotateY(180deg)" : "rotate(360deg)")};
  border-radius: 2px;
  box-shadow: ${mg.shadow_btn};
  &:hover {
    box-shadow: ${mg.shadow_btn4};
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

// Component:
export const Card = ({ card, callback }: Props) => {
  const handleClick = () => {
    if (card.clickable) callback(card);
  };

  // Template:
  return (
    <DivWrapper onClick={handleClick}>
      <FrontImg flipped={card.flipped} src={card.frontImage} alt="card-front" />
      <BackImg flipped={card.flipped} src={card.backImage} alt="card-back" />
    </DivWrapper>
  );
};
