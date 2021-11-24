// import { init } from "emailjs-com";
import { useReducer, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
// styles:
import { theme } from "../../../GlobalStyles";
import styled from "styled-components/macro";
// emailjs:
// emailjs.init("user_9NtwDnwudSGy35LXjGYNh");

// type TypeSubmit = {
//   name: string;
//   email: string;
//   message: any;
// };
const initialState = {
  name: "",
  email: "",
  message: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.value };
    case "email":
      return { ...state, email: action.value };
    case "message":
      return { ...state, message: action.value };
    default:
      throw new Error();
  }
}

const recaptchaKey = "6LfZkkQdAAAAALGlOh0CURkfvQ3zBh_7qAZoJgHT";
// const recaptchaKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
const emailjsService = "service_4370h1f";
const emailjsTemplate = "template_rl8gm1r";
const emailjsUser = "user_9NtwDnwudSGy35LXjGYNh";
interface Props {
  emailRef: React.MutableRefObject<null>;
}

export const ContactForm = (props: Props) => {
  const [formState, dispatch] = useReducer(reducer, initialState);
  const [showFormErr, setShowFormErr] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState({
    title: "",
    paragraph: "",
  });
  const [showCaptcha, setShowCaptcha] = useState(false);
  const { name, email, message } = formState;

  const submitFormAndShowCaptcha = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    setShowCaptcha(true);
  };
  // recaptcha use example - teilored
  const sendEmail = (captchaValue) => {
    if (name === "" || email === "" || message === "") {
      setShowFormErr(true);
      return;
    }

    const params = {
      ...formState,
      "g-recaptcha-response": captchaValue,
    };

    setFormSubmitted({ title: "Sending message...", paragraph: "" });
    emailjs.send(emailjsService, emailjsTemplate, params, emailjsUser).then(
      ({ status }) => {
        if (status === 200) {
          setFormSubmitted({
            title: "Message has been sent",
            paragraph: "I will be in touch with you soon.",
          });
        } else {
          setFormSubmitted({
            title:
              "An unexpected status code was returned from the e-mail provider, please try again later",
            paragraph:
              "Please check the correct form of your e-mail address ( xxx@xxx.xxx ).",
          });
        }
      },
      (error) => {
        // eslint-disable-next-line no-console
        console.log(error);
        setFormSubmitted({
          title: "Error sending message, please try again later",
          paragraph:
            "Please check the correct form of your e-mail address ( xxx@xxx.xxx ).",
        });
      }
    );
  };

  return formSubmitted.title === "" ? (
    <DivMain>
      <h2>Send me a message</h2>
      {!showCaptcha ? (
        <Form onSubmit={submitFormAndShowCaptcha}>
          <DivContent>
            <DivContentData>
              <div id="contactInput">
                <input
                  ref={props.emailRef}
                  autoComplete="off"
                  id="contact-form-name"
                  type="text"
                  value={name}
                  onChange={(e) =>
                    dispatch({ type: "name", value: e.target.value })
                  }
                  required
                />
                <label htmlFor="contact-form-name">Name:</label>
              </div>
              <div>
                <input
                  autoComplete="off"
                  id="contact-form-email"
                  type="email"
                  value={email}
                  onChange={(e) =>
                    dispatch({ type: "email", value: e.target.value })
                  }
                  required
                />
                <label htmlFor="contact-form-email">Email:</label>
              </div>
            </DivContentData>
            <DivContentMessage>
              <div>
                <textarea
                  id="contact-form-message"
                  value={message}
                  onChange={(e) =>
                    dispatch({ type: "message", value: e.target.value })
                  }
                  required
                />
                <label htmlFor="contact-form-message">Message:</label>
              </div>
            </DivContentMessage>
          </DivContent>
          <DivSubmit>
            {showFormErr ? (
              <p>Fill in all three input fields to send a message</p>
            ) : null}
            <button type="submit">Go!</button>
          </DivSubmit>
        </Form>
      ) : (
        <ReCAPTCHA sitekey={recaptchaKey} onChange={sendEmail} />
      )}
    </DivMain>
  ) : (
    <DivMain>
      <DivAlert>
        <h3>{formSubmitted.title}</h3>
        <p>{formSubmitted.paragraph}</p>
      </DivAlert>
    </DivMain>
  );
};

//Styled components:
const DivMain = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  padding: 5em 3em;
  font-family: Roboto;
  h2 {
    margin: 1em auto;
    font-family: Roboto;
    font-size: 2.25em;
    font-weight: 300;
    color: ${theme.text_w_l};
    text-transform: uppercase;
  }
`;

const DivAlert = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 400px;
  height: auto;
  padding: 0;
  text-align: center;
  h3 {
    font-size: 2em;
  }
  p {
    font-size: 1.5em;
  }
  @media screen and (${theme.sx_min_425}) {
    max-width: 50%;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 100%;
  @media screen and (${theme.sx_min_425}) {
    width: 75%;
  }
  @media screen and (${theme.sm_min_768}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
    width: 85%;
  }
  @media screen and (${theme.md_min_1024}) {
  }
`;

const DivContentData = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    label {
      position: absolute;
      font-size: 1.2em;
      font-weight: 300;
      padding: 1.25em 1em;
      -webkit-transition: all 0.25s ease;
      transition: all 0.25s ease;
      pointer-events: none;
    }

    input {
      font-size: 1.2em;
      font-weight: 300;
      padding: 1.25em 1em;
      border: 1px solid black;
      border-radius: 2px;
      :focus ~ label {
        padding: 0.65em 1.8em;
        font-size: 0.7em;
        color: ${theme.text_bl_s};
        -webkit-transition: all 0.225s ease;
        transition: all 0.225s ease;
      }
      :valid ~ label {
        padding: 0.65em 1.8em;
        font-size: 0.7em;
        color: ${theme.text_bl_s};
        -webkit-transition: all 0.225s ease;
        transition: all 0.225s ease;
      }

      :focus {
        background: ${theme.focus_gr_l};
        -webkit-transition: all 0.225s ease;
        transition: all 0.225s ease;
      }
      :hover {
        background: ${theme.focus_gr_l};
      }
    }
  }
  @media screen and (${theme.sm_min_768}) {
    justify-content: space-between;
    height: 100%;
  }
`;
const DivContentMessage = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    label {
      position: absolute;
      font-size: 1.2em;
      font-weight: 300;
      padding: 1.25em 1em;
      -webkit-transition: all 0.25s ease;
      transition: all 0.25s ease;
      pointer-events: none;
    }
    textarea {
      font-size: 1.2em;
      font-weight: 300;
      height: 6em;
      padding: 1.25em 1em;
      border: 1px solid black;
      border-radius: 2px;
      :focus ~ label {
        padding: 0.65em 1.8em;
        font-size: 0.7em;
        color: ${theme.text_bl_s};
        -webkit-transition: all 0.225s ease;
        transition: all 0.225s ease;
      }
      :valid ~ label {
        padding: 0.65em 1.8em;
        font-size: 0.7em;
        color: ${theme.text_bl_s};
        -webkit-transition: all 0.225s ease;
        transition: all 0.225s ease;
      }
      :focus {
        background: ${theme.focus_gr_l};
        -webkit-transition: all 0.225s ease;
        transition: all 0.225s ease;
        outline: none;
      }
      :hover {
        background: ${theme.focus_gr_l};
      }
    }
  }
`;

const DivSubmit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  margin: 1em 0 0;
  width: 100%;
  button {
    width: 100%;
    font-size: 2em;
    height: 2.5em;
    text-align: center;
    border: 1px solid black;
    border-radius: 2px;
    background: ${theme.color_purple};
    color: ${theme.text_w_l};
    opacity: 0.65;
    :hover {
      opacity: 1;
      transition: transform 0.15s linear;
      transform: translateY(3px);
    }
  }
  p {
    margin: 1em auto;
    font-size: 1.5em;
    font-weight: 300;
    color: lightcoral;
  }
  @media screen and (${theme.sx_min_425}) {
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 75%;
    button {
      width: 25%;
      height: 2em;
      font-size: 1.5em;
      text-align: center;
    }
    p {
      margin: 0 auto;
      font-size: 1.5em;
      font-weight: 300;
      color: lightcoral;
    }
  }
  @media screen and (${theme.sm_min_768}) {
    width: 85%;
  }
  @media screen and (${theme.md_min_1024}) {
  }
`;
