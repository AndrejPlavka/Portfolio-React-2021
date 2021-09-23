import { KeepInViewPort } from "./KeepInViewPort";
import React from "react";
import styled from "styled-components";

//Styled-components
const DivContent = styled.div`
  padding: 2em 2em 1em;
`;

const SpanBlink = styled.span`
  @media (prefers-reduced-motion: no-preference) {
    animation: blinker infinite 1s linear;
  }
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;

//Props interface
interface Props {
  text: string;
  numberOfLetters: number;
}

// Functions Componetns
export function ConsoleText(props: { text: string }) {
  const paragraphs = props.text.split("\n").map((item, key) => (
    <span key={key}>
      {key > 0 && <br />}
      {item}
    </span>
  ));

  return <>{paragraphs}</>;
}

const NON_BREAK_SPACE = "\u00a0";
/*
Unicode Character 'NO-BREAK SPACE' (U+00A0) commonly used in Python or Java
\u00c2\u00a0 is the JSON representation of the bytes c2 a0, 
which is the UTF-8 encoding of the unicode character U+00A0. 
Had the source done their work correctly, the JSON string would either contain \u00a0 or the bytes c2 a0
/t - horizontal tab
*/
function perserveSpaces(text: string) {
  return text
    .split(" ")
    .join(NON_BREAK_SPACE)
    .split("\t")
    .join(NON_BREAK_SPACE.repeat(4));
}
export function Console({ text, numberOfLetters }: Props) {
  const parsedText = perserveSpaces(text.slice(0, numberOfLetters));
  return (
    <DivContent>
      <DivContent>
        <ConsoleText text={parsedText} />
        <SpanBlink>|</SpanBlink>
      </DivContent>
      <KeepInViewPort />
    </DivContent>
  );
}
