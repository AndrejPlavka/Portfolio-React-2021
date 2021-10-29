import { init } from "emailjs-com";
import { useReducer, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
// styles:
import styled from "styled-components/";
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

export const ContactForm = () => {
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
        // process.env.EMAIL_JS_SERVICE,
        // process.env.EMAIL_JS_TEMPLATE,
        // params,
        // process.env.EMAIL_JS_USER
      )
      .then(
        ({ status }) => {
          if (status === 200) {
            setFormSubmitted({
              title: "Message has been sent",
              paragraph: "Mike will be in contact with you soon.",
            });
          } else {
            setFormSubmitted({
              title:
                "Unexpected status code returned from EmailJS, try again later",
              paragraph: "Please contact Mike either by phone or email.",
            });
          }
        },
        (err) => {
          // eslint-disable-next-line no-console
          console.log(err);
          setFormSubmitted({
            title: "Error sending message, try again later",
            paragraph: "Please contact Mike either by phone or email.",
          });
        }
      );
  };

  return formSubmitted.title === "" ? (
    <DivMain>
      <h3 className="text-lato text-2xl font-light text-white">
        Send me a message
      </h3>
      {!showCaptcha ? (
        <Form onSubmit={submitFormAndShowCaptcha}>
          <DivContent className="flex font-open-sans justify-start flex-col sm:flex-row">
            <DivContentData className="sm:mr-4 w-100 sm:w-1/2 md:w-2/5 flex flex-col items-end">
              <input
                id="contact-form-name"
                className="appearance-none border-2 border-gray-200 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:border-theme-green"
                type="text"
                value={name}
                onChange={(e) =>
                  dispatch({ type: "name", value: e.target.value })
                }
                required
              />
              <label
                className="block text-gray-500 font-bold my-2 w-full"
                htmlFor="contact-form-name"
              >
                Name:
              </label>
              <label
                className="block text-gray-500 font-bold my-2 w-full"
                htmlFor="contact-form-email"
              >
                Email:
                <input
                  id="contact-form-email"
                  className="appearance-none border-2 border-gray-200 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:border-theme-green"
                  type="email"
                  value={email}
                  onChange={(e) =>
                    dispatch({ type: "email", value: e.target.value })
                  }
                  required
                />
              </label>
            </DivContentData>
            <DivContentMesage className="sm:mx-4 w-full sm:w-1/2 md:w-3/5">
              <label
                className="block text-gray-500 font-bold my-2"
                htmlFor="contact-form-message"
              >
                Message:
                <textarea
                  //   rows="5"
                  id="contact-form-message"
                  className="appearance-none border-2 border-gray-200 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:border-theme-green"
                  //   type="text"
                  value={message}
                  onChange={(e) =>
                    dispatch({ type: "message", value: e.target.value })
                  }
                  required
                />
              </label>
            </DivContentMesage>
          </DivContent>
          <div className="w-full flex justify-end items-center flex-col sm:flex-row">
            {showFormErr ? (
              <p className="sm:mr-4 text-red-400">
                Please fill in all three input boxes to send a message
              </p>
            ) : null}
            <button
              className="bg-theme-green text-white py-2 px-4 mt-6 sm:mr-4 rounded focus:outline-none focus:shadow-outline w-full md:w-1/4 lg:w-1/5"
              type="submit"
            >
              Send
            </button>
          </div>
        </Form>
      ) : (
        <ReCAPTCHA sitekey={recaptchaKey} onChange={sendEmail} />
      )}
    </DivMain>
  ) : (
    <div className="flex flex-col items-center">
      <h3 className="text-lato text-2xl font-light text-white">
        {formSubmitted.title}
      </h3>
      <p>{formSubmitted.paragraph}</p>
    </div>
  );
};

//Styled components:
const DivMain = styled.div`
  background: #bdc3c7;
  padding: 30px 0 50px 0;
  text-align: center;
  h3 {
    margin: 0;
    padding: 0;
    font-family: "Open Sans";
    color: rgba(255, 255, 255, 0.9);
    font-size: 25px;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  button {
    margin: 0;
    float: center;
    background: #e74c3c;
    padding: 8px 77px;
    border: 1px solid #e74c3c;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
    font-family: "Varela Round";
    transition: all 0.3;
    &:hover {
      background: none;
      border: 1px solid rgba(0, 0, 0, 0.7);
    }
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 880px;
  height: 450px;
  background: rgba(0, 0, 0, 0.32);
  text-align: left;
  padding: 10px 0;
`;

const DivContent = styled.form`
  background: #bdc3c7;
  padding: 30px 0 50px 0;
  text-align: center;
`;

const DivContentData = styled.form`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 80%;
  margin: 0 auto;
  input {
    display: inline-block;
    width: 45%;
    label {
      color: #999;
      padding: 1.3rem 30px 1rem 30px;
      position: absolute;
      top: 10px;
      left: 0;
      -webkit-transition: all 0.25s ease;
      transition: all 0.25s ease;
      pointer-events: none;
    }
    /* input[name="email"],
    input[name="name"] {
      width: 100%;
      height: 40px;
    } */
  }
`;
const DivContentMesage = styled.form`
  textarea {
    width: 100%;
    resize: none;
  }
`;
