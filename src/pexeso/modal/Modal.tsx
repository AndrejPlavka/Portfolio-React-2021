import { createPortal } from "react-dom";
import React, { FC } from "react";
// Styles:
import { theme as mg } from "../theme";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  z-index: 3;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background: ${mg.backgroundFaded};
  /* opacity: 0.9; */
`;

type Props = {
  showModal: boolean;
  //   onClose: () => void;
};

export const Modal: FC<Props> = ({ showModal, children }) => {
  return showModal
    ? createPortal(
        <Wrapper>
          <div>{children}</div>
        </Wrapper>,
        document.body
      )
    : null;
};
