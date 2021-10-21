import { IoIosArrowUp } from "react-icons/io";
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
    <DivScrollButtonConteiner>
      <button type="button" onClick={scrollToTop}>
        <IoIosArrowUp />
      </button>
    </DivScrollButtonConteiner>
  ) : null;
};

const DivScrollButtonConteiner = styled.div`
  align-content: center;
  position: fixed; /*Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color: lightgreen; /* Set a background color */
  color: green; /* Text color */
  /* cursor: pointer; Add a mouse pointer on hover */
  margin: 15px;
  border-radius: 10px; /* Rounded corners */
  font-size: 50px; /* Increase font size */
  transition: all 10s ease;
`;
