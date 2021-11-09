import { ContactForm } from "../components/contact/ContactForm";
import { contact } from "../PortfolioData";
import React, { useRef, useState } from "react";
// Styles:
import {
  animationOne,
  animationThree,
  transition,
} from "../animations/animations";
import { motion } from "framer-motion";
import { theme } from "../../GlobalStyles";
import styled from "styled-components/macro";

// component:
export const Contact = () => {
  const emailRef = useRef(null);
  const scrollToReff = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  let quoteText =
    '"The greatest glory in living lies not in never falling, but in rising every time we fall."';
  let quoteAutor = "-Nelson Mandela";

  if (!contact.email) return null;

  // Template:
  return (
    <DivMain>
      <motion.div
        className="div"
        initial="start"
        animate="in"
        exit="end"
        variants={animationThree}
        transition={transition}
      >
        <DivInfoSection>
          <DivInfoContent>
            <DivTextSection>
              <h1>Contact.</h1>
              <h2>
                Would you like to work on a project together? Just email me!
              </h2>
              <p>
                {quoteText}
                <br />
                {quoteAutor}
              </p>
            </DivTextSection>
            <DivLinksSection>
              <DivLink>
                <a href={contact.linkedin} rel="noreferrer" target="_blank">
                  <DivA>{contact.LinkedIn}</DivA>
                  <DivB>LinkedIn</DivB>
                </a>
              </DivLink>
              <DivLink>
                {/*Timebeeing solution -> implement custom hook !! */}
                <a onClick={() => scrollToReff(emailRef)}>
                  <DivA>{contact.Mail}</DivA>
                  <DivB>Email</DivB>
                </a>
              </DivLink>
              <DivLink>
                <a href={contact.instagram} rel="noreferrer" target="_blank">
                  <DivA>{contact.Instagram}</DivA>
                  <DivB>Instagram</DivB>
                </a>
              </DivLink>
              <DivLink>
                <a href={contact.facebook} rel="noreferrer" target="_blank">
                  <DivA>{contact.Facebook}</DivA>
                  <DivB>Facebook</DivB>
                </a>
              </DivLink>
            </DivLinksSection>
          </DivInfoContent>
        </DivInfoSection>
        <DivCFSection>
          <ContactForm emailRef={emailRef} />
        </DivCFSection>
      </motion.div>
    </DivMain>
  );
};

// Styled components:

const DivMain = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  .div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;
const DivInfoSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  box-shadow: ${theme.shadow_intro_l};
`;
const DivInfoContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  max-width: 1200px;
  width: 100%;
  padding: 5em 3em;
  @media screen and (${theme.sx_min_425}) {
    align-items: center;
  }
`;
// Text area:  *****************************
const DivTextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 1.5em;
  text-align: left;
  margin: 0 0 2em;
  h1 {
    width: 100%;
    font-size: 4.5em;
    margin: 0 0 1em;
  }
  h2 {
    margin-bottom: 0.5em;
    font-size: 2.25em;
    font-family: Roboto;
    font-weight: 300;
    margin: 0 0 1em;
  }
  p {
    font-weight: 300;
    font-size: 1.4em;
  }
  @media screen and (${theme.sx_min_425}) {
    max-width: 540px;
  }
  @media screen and (${theme.sm_min_768}) {
    max-width: 800px;
    text-align: center;
  }
  @media screen and (${theme.md_min_1024}) {
    max-width: 1200px;
    text-align: center;
  }
  @media screen and (${theme.lg_min_1200}) {
  }
`;
// Links area *****************************
const DivLinksSection = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 100%;
  padding: 1em 0;
  @media screen and (${theme.sx_min_425}) {
    max-width: 540px;
  }
  @media screen and (${theme.sm_min_768}) {
    min-width: 100%;
  }
`;

const DivLink = styled.div`
  display: flex;
  align-items: center;
  width: 48%;
  margin: 1em 0;
  a {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    width: auto;
    height: 100%;
    text-decoration: none;
    cursor: pointer;
    :hover {
      opacity: 0.5;
      transition: transform 0.15s linear;
      transform: translateY(3px);
    }
  }
  @media screen and (${theme.sm_min_768}) {
    width: auto;
    justify-content: center;
    a {
      justify-content: center;
    }
  }
`;

const DivA = styled.div`
  display: flex;
  width: 4em;
  height: 100%;
  margin: 0 1em 0 0;
`;
const DivB = styled.div`
  font-size: 1.6em;
  line-height: 2em;
  color: black;
`;
// Contact form section ******************************************************************
const DivCFSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(4, 0, 2, 0.75);
`;

// .btn6{
//   border:1px solid transparent;
//    -webkit-transition: all 0.4s cubic-bezier(.5, .24, 0, 1);
//   transition: all 0.4s cubic-bezier(.5, .24, 0, 1);
// }

// .btn6::before {
//   content: '';
//   position: absolute;
//   left: 0px;
//   bottom:0px;
//   z-index:-1;
//   width: 0%;
//   height:1px;
//   background: #6098FF;
//   box-shadow: inset 0px 0px 0px #6098FF;
//   display: block;
//   -webkit-transition: all 0.4s cubic-bezier(.5, .24, 0, 1);
//   transition: all 0.4s cubic-bezier(.5, .24, 0, 1)
// }

// .btn6:hover::before {
//   width:100%;
// }

// .btn6::after {
//   content: '';
//   position: absolute;
//   right: 0px;
//   top:0px;
//   z-index:-1;
//   width: 0%;
//   height:1px;
//   background: #6098FF;
//   -webkit-transition: all 0.4s cubic-bezier(.5, .24, 0, 1);
//   transition: all 0.4s cubic-bezier(.5, .24, 0, 1)
// }
// .btn6:hover::after {
//   width:100%;
// }
// .btn6:hover{
//   border-left:1px solid #6098FF;
//   border-right:1px solid #6098FF;
// }
