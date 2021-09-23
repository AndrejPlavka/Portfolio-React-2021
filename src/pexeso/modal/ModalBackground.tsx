import c1 from "../img/c1.jpg";
import c10 from "../img/c10.jpg";
import c11 from "../img/c11.jpg";
import c12 from "../img/c12.jpg";
import c2 from "../img/c2.jpg";
import c3 from "../img/c3.jpg";
import c4 from "../img/c4.jpg";
import c5 from "../img/c5.jpg";
import c6 from "../img/c6.jpg";
import c7 from "../img/c7.jpg";
import c8 from "../img/c8.jpg";
import c9 from "../img/c9.jpg";

// Card type
export type CardType = {
  id: string;
  gameStatus?: boolean;
};

// Victory images in an array
export const ModalBackground: string[] = [
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
  c10,
  c11,
  c12,
];

export let ImgSrc =
  ModalBackground[Math.floor(Math.random() * ModalBackground.length)];
