import { init } from "emailjs-com";
import { useReducer, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
// styles:
import styled from "styled-components/macro";
// emailjs:
// emailjs.init("user_9NtwDnwudSGy35LXjGYNh");
// to leasrn useReducer
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
  const recaptchaKey = "";

  const submitFormAndShowCaptcha = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    emailjs
      .send(
        "service_4370h1f",
        "template_rl8gm1r",
        params,
        "user_9NtwDnwudSGy35LXjGYNh"
      )
      .then(
        ({ status }) => {
          if (status === 200) {
            setFormSubmitted({
              title: "Message has been sent",
              paragraph: "I will be in contact with you soon.",
            });
          } else {
            setFormSubmitted({
              title:
                "Unexpected status code returned from EmailJS, try again later",
              paragraph:
                "Please check your email adress xx@xx.xx or try other media.",
            });
          }
        },
        (err) => {
          // eslint-disable-next-line no-console
          console.log(err);
          setFormSubmitted({
            title: "Error sending message, try again later",
            paragraph:
              "Please check your email adress xx@xx.xx or try other media.",
          });
        }
      );
  };

  return formSubmitted.title === "" ? (
    <DivMain>
      <h3>Send me a message</h3>
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
            <button type="submit">Go!</button>
            {showFormErr ? (
              <p>Please fill in all three input boxes to send a message</p>
            ) : null}
          </DivSubmit>
        </Form>
      ) : (
        // <ReCAPTCHA sitekey={recaptchaKey} onChange={sendEmail} />
        <DivAlert>{"nothing"}</DivAlert>
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
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  max-width: 1300px;
  width: 100%;
  padding: 5em 3.6em 6em;
  background: rgba(4, 0, 2, 0.75);
  font-family: Roboto;
  h3 {
    margin: 20px auto;
    font-family: Roboto;
    font-size: 2.5em;
    font-weight: 300;
    color: white;
    text-transform: uppercase;
  }
  @media screen and (max-width: 1128px) {
    padding: 4em 3em;
  }
  @media screen and (max-width: 450px) {
    padding: 4em 1.2em;
    flex-direction: column;
  }
  h3 {
    font-size: 2em;
    font-weight: 300;
  }
`;

const DivAlert = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: auto;
  max-width: 880px;
  height: 450px;
  padding: 0;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const DivContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 30px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    column-gap: 0px;
  }
`;

const DivContentData = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    label {
      position: absolute;
      font-size: 1.25em;
      font-weight: 300;
      padding: 1.3rem 30px 1rem 30px;
      -webkit-transition: all 0.25s ease;
      transition: all 0.25s ease;
      pointer-events: none;
    }

    input {
      padding: 1.3rem 30px;
      outline: none;
      font-size: 1.25em;
      font-weight: 300;
      border: 1px solid black;
      border-radius: 2px;
      :focus ~ label {
        outline: none;
        padding: 0.5rem 30px;
        font-size: 0.75em;
        color: black;
        -webkit-transition: all 0.225s ease;
        transition: all 0.225s ease;
      }
      :valid ~ label {
        outline: none;
        padding: 0.5rem 30px;
        font-size: 0.75em;
        color: black;
        -webkit-transition: all 0.225s ease;
        transition: all 0.225s ease;
      }

      :focus {
        background: lightgray;
        -webkit-transition: all 0.225s ease;
        transition: all 0.225s ease;
      }
      :hover {
        background: lightgray;
      }
    }
  }
  /* @media screen and (max-width: 600px) {
    div {
      label {
        font-size: 1.25em;
        font-weight: 300;
        padding: 1.3rem 30px 1rem 30px;
      }
      input {
        padding: 1.3rem 30px;
        font-size: 1.25em;
        font-weight: 300;
        :focus ~ label {
          padding: 0.5rem 30px;
          font-size: 0.75em;
        }
        :valid ~ label {
          padding: 0.5rem 30px;
          font-size: 0.75em;
        }
      }
    }
  } */
`;
const DivContentMessage = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    label {
      font-size: 1.25em;
      font-weight: 300;
      position: absolute;
      padding: 1.3rem 30px 1rem 30px;
      -webkit-transition: all 0.25s ease;
      transition: all 0.25s ease;
      pointer-events: none;
    }
    textarea {
      font-size: 1.25em;
      font-weight: 300;
      height: 120px;
      padding: 2rem 30px 1rem 30px;
      border: 1px solid black;
      border-radius: 2px;
      :focus ~ label {
        padding: 1rem 30px 1rem 30px;
        font-size: 0.75em;
        color: #999;
        -webkit-transition: all 0.225s ease;
        transition: all 0.225s ease;
      }
      :valid ~ label {
        padding: 1rem 30px 1rem 30px;
        font-size: 0.75em;
        color: #999;
        -webkit-transition: all 0.225s ease;
        transition: all 0.225s ease;
      }
      :focus {
        background: lightgray;
        -webkit-transition: all 0.225s ease;
        transition: all 0.225s ease;
        outline: none;
      }
      :hover {
        background: lightgray;
      }
    }
  }
  /* @media screen and (max-width: 600px) {
    div {
      label {
        font-size: 1.25em;
        font-weight: 300;
        position: absolute;
        padding: 1.3rem 30px 1rem 30px;
      }
      textarea {
        font-size: 1.25em;
        font-weight: 300;
        padding: 2rem 30px 1rem 30px;
        :focus ~ label {
          padding: 1rem 30px 1rem 30px;
          font-size: 0.75em;
        }
        :valid ~ label {
          padding: 1rem 30px 1rem 30px;
          font-size: 0.75em;
        }
      }
    } */
`;

const DivSubmit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
  justify-content: flex-end;
  button {
    width: 20%;
    height: 3em;
    text-align: center;
    font-size: 1.5em;
    border: 1px solid black;
    border-radius: 2px;
    outline: none;
    background: rgb(120, 81, 169);
    color: white;
    opacity: 0.65;
    :hover {
      opacity: 1;
      transition: transform 0.2s linear;
      transform: translateY(2px);
    }
  }
  p {
    margin: 30px auto;
    font-size: 1.5em;
    font-weight: 300;
    color: lightcoral;
  }
  /* @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    button {
      border: 1px solid black;
      outline: none;
      font-size: 1.5em;
      height: 3em;
      padding: 1.3rem 30px 1rem 30px;
      text-align: center;
    }
    p {
      margin: 30px auto;
    font-size: 1.5em;
    font-weight: 300;
    color: lightcoral;
    }
  } */
`;
