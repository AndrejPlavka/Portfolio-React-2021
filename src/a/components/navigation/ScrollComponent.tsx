import { IconScrollUp } from "../../assets/icons";
import { theme } from "../../../GlobalStyles";
import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";

export const ScrollComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () =>
    window.pageYOffset > 100 ? setIsVisible(true) : setIsVisible(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    // lissten to scroll event, if scroll => toggleVisibility
    window.addEventListener("scroll", toggleVisibility);
    // unmount event listener
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible ? (
    <DivMain>
      <DivScrollButtonConteiner>
        <button type="button" onClick={scrollToTop}>
          <IconScrollUp />
        </button>
      </DivScrollButtonConteiner>
    </DivMain>
  ) : null;
};
// chrome://flags/#smooth-scrolling -> enable !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 1/2 dna v kkte
const DivMain = styled.div`
  display: flex;
  width: 100%;
  flex-basis: 100%;
  justify-content: center;
`;
const DivScrollButtonConteiner = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex-basis: 100%;
  max-width: 1500px;
  padding: 0.5em;

  button {
    background: transparent;
    z-index: 100;
    display: flex;
    align-content: center;
    position: fixed;
    bottom: 0.25em; /* Place the button at the bottom of the page */
    border: none;
    outline: none;
    transition: transform 0.2s linear;
    opacity: 0.5;
    filter: drop-shadow(0px 3px 2px rgb(53, 48, 54));
    /* filter: drop-shadow(0 0.1rem 0.12em black); */
    :hover {
      transition: transform 0.2s linear;
      transform: translateY(-7px);
      opacity: 1;
    }
    @media screen and (${theme.sm_min_768}) {
      bottom: 0.6em;
    }
  }
  @media screen and (${theme.md_min_1024}) {
    padding: 0 0.5em;
  }
  // display: flex;
  // align-content: center;
  // position: fixed; /*Fixed/sticky position */
  // bottom: 30px; /* Place the button at the bottom of the page */
  // right: 30px; /* Place the button 30px from the right */
  // z-index: 99; /* Make sure it does not overlap */
  // border: none; /* Remove borders */
  // outline: none; /* Remove outline */
  // border-radius: 10px; /* Rounded corners */
  // font-size: 50px; /* Increase font size */
`;
