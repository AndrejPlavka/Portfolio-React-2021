import { createPortal } from "react-dom";
import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  z-index: 3;
  background-color: rgba(255, 255, 255, 0.6);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
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
