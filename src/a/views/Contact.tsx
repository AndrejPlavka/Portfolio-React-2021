import { ContactForm } from "../components/contact/ContactForm";
import { contact } from "../PortfolioData";
// Styles:
import { IconLinkedIn } from "../assets/icons";
import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import styled from "styled-components/macro";
// import ReactSpin

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
      <DivInfoSection>
        <DivInfoContent>
          <DivTextSection>
            <h1>Contact.</h1>
            <h2>Would you like to work on project together? Just email me!</h2>
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
    </DivMain>
  );
};

// Styled components:

const DivMain = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const DivInfoSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  box-shadow: 0 3px 5px -3px rgba(57, 63, 72, 0.3);
`;
const DivInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  max-width: 1300px;
  width: 100%;
  padding: 6em 3em;
  /* row-gap: 20%; */
  @media screen and (max-width: 1128px) {
    padding: 5em 3em;
  }
  @media screen and (max-width: 450px) {
    padding: 4em 1.2em;
    flex-direction: column;
  }
`;
// Text area:  *****************************
const DivTextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
  align-content: stretch;
  flex-wrap: wrap;
  padding: 1em 0 3em 0;
  text-align: center;
  line-height: 1.5;
  h1 {
    font-size: 5em;
    margin: 0 0 30px;
  }
  h2 {
    margin-bottom: 0.5em;
    font-size: 2.25em;
    font-family: Roboto;
    font-weight: 300;
    margin: 0 0 20px;
  }
  p {
    text-align: center;
    font-weight: 300;
    font-size: 1.25em;
  }
  @media screen and (max-width: 450px) {
    padding: 0 0.6em;
    h1 {
      font-size: 4em;
    }
    h2 {
      font-size: 2em;
    }
    p {
      font-size: 1.25em;
    }
  }
  @media screen and (max-width: 375px) {
    padding: 0 0.6em;
  }
`;
// Links area *****************************
const DivLinksSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1em 0 1em 0;
`;

const DivLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: center;
  height: 5em;
  padding: 0 0.6em;
  @media screen and (max-width: 375px) {
    flex-basis: 100%;
    align-items: center;
  }
  /* margin-bottom: 2em; */
  a {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    flex-basis: 100%;
    text-decoration: none;
    cursor: pointer;
    :hover {
      opacity: 0.7;
      transition: transform 0.2s linear;
      transform: translateY(2px);
    }
  }
`;

const DivA = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 1em 0 0;
  /* :hover {
    filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.52));
  } */
  @media screen and (max-width: 780px) {
    width: 50px;
    height: 50px;
    margin: 0 0.5em 0 0;
  }
`;
const DivB = styled.div`
  font-size: 1.8em;
  line-height: 2;
  color: black;
  @media screen and (max-width: 780px) {
    font-size: 1.2em;
    line-height: 1.6;
  }
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
