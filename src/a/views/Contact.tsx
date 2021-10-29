import { ContactForm } from "../components/contact/ContactForm";
import { contact } from "../PortfolioData";
// Styles:
import { IconLinkedIn } from "../assets/icons";
import styled from "styled-components/macro";
// import ReactSpin

export const Contact = () => {
  if (!contact.email) return null;
  let quoteText =
    '"The greatest glory in living lies not in never falling, but inrising every time we fall."';
  let quoteAutor = "-Nelson Mandela";
  let picovina = "LinkedIn";
  // Template:
  return (
    <DivMain>
      <DivInfoSection>
        <DivContent>
          <DivTextSection>
            <h1>Contact.</h1>
            <h2>Would you like to work on project together? Just email me!</h2>
            <p>
              {quoteText}
              <br />
              {quoteAutor}
            </p>
          </DivTextSection>
          <DivLinks>
            <DivLink>
              <a href={contact.linkedin} rel="noreferrer" target="_blank">
                <DivA>{contact.LinkedIn}</DivA>
                <DivB>LinkedIn</DivB>
              </a>
            </DivLink>
            <DivLink>
              <a
                href={`mailto:${contact.email}`}
                rel="noreferrer"
                target="_blank"
              >
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
          </DivLinks>
        </DivContent>
      </DivInfoSection>
      <DivContctForm>
        <ContactForm />
      </DivContctForm>
    </DivMain>
  );
};

// Styled components:

const DivMain = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const DivInfoSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-shadow: 0 3px 5px -3px rgba(57, 63, 72, 0.3);
`;
const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  max-width: 1300px;
  width: 100%;
  padding: 6em 0.5em;
  background: lightblue;
  @media screen and (max-width: 1128px) {
    padding: 5em 3em;
  }
  @media screen and (max-width: 430px) {
    padding: 4em 1.2em;
    flex-direction: column;
  }
`;
// Text area:  *****************************
const DivTextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  line-height: 1.5;
  background: lightgreen;
  h1 {
    margin: 0.5em 0 0;
    font-size: 5em;
  }
  h2 {
    margin-bottom: 0.5em;
    font-size: 2.25em;
    font-family: Roboto;
    font-weight: 300;
  }
  p {
    text-align: center;
    font-weight: 200;
    font-size: 1.4em;
  }
  @media screen and (max-width: 375px) {
    padding: 0 0.6em;
  }
`;
// Links area *****************************
const DivLinks = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  justify-content: center;
  align-content: space-between;
  flex-wrap: wrap;
  max-height: 300px;
  background: gray;
  /* transition: transform 0.2s linear;
    :hover {
      transform: translateY(-7px);
    } */
  /* @media screen and (max-width: 1128px) {
      flex-basis: 45%;
    }
    @media screen and (max-width: 760px) {
      flex-basis: 92%;
    }
    @media screen and (max-width: 430px) {
      flex-basis: 100%;
    } */
`;

const DivLink = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  height: 5em;
  padding: 0 0.6em;
  margin-bottom: 2em;
  a {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-basis: 100%;
    text-decoration: none;
    cursor: pointer;
    :hover {
      filter: drop-shadow(0px 2px 1px rgb(153, 141, 153));
    }
  }
`;

const DivA = styled.div`
  display: flex;
  vertical-align: middle;
  width: 80px;
  height: 80px;
  margin: 0 1em 0 0;
`;
const DivB = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8em;
  line-height: 2;
  color: black;
`;
// Contact form section ******************************************************************
const DivContctForm = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-shadow: 0 3px 5px -3px rgba(57, 63, 72, 0.3);
`;
