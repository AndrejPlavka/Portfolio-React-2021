export const theme = {
  //colors
  grey: "#777",
  primaryBackground: "#fefefe",
  brown: "#DEB887",
  hoverColor: "#fafafa",
  white: "white",
  red: "red",
  black: "black",
  lightGrey: "#e7e7e7",
  darkerGrey: "#eeeef0",
  lightRed: "rgba(175, 47, 47, 0.15)",
  lightGreen: "#00FF00",
  contactShadow: "rgb(38, 57, 77)",
  headerBorderColor: "#696969",
  headerShadow1: "rgba(50, 50, 93, 0.25)",
  headerShadow2: "rgba(0, 0, 0, 0.3)",
  imgBorderColor: "#4e4e50",

  //font-weights
  tinyFont: 100,
  tinyFont2: 200,
  thickerFont1: 300,
  thickerFont2: 400,
  mediumFont: 500,
  boldFont: 700,

  //font-styles
  generalFont: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue"`,

  //media-widths
  width1000: "max-width: 1000px",
  width530: "max-width: 530px",
  width760: "max-width: 760px",
  width800: "max-width: 800px",
  width400: "max-width: 400px",
  width300: "max-width: 300px",
};

export const light = {
  crlbg: "#fcfcfc",
  crlbgalt: "#fff",
  crlfg: "#555",
  crlfgalt: "#444",
  crlprimary: "#2978b5",
  shadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
};

export const dark = {
  crlbg: "#23283e",
  crlbgalt: "#2a2f4c",
  crlfg: "#bdbddd",
  crlfgalt: "#cdcdff",
  crlprimary: "#90a0d9",
  shadow:
    "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
};

export const lightTheme = {
  body: "#FFF",
  text: "#363537",
  toggleBorder: "#FFF",
  background: "#363537",
};
export const darkTheme = {
  body: "#363537",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#999",
};

// import { createGlobalStyle } from "styled-components";
// export const GlobalStyles = createGlobalStyle`
//   body {
//     background: ${({ theme }) => theme.body};
//     color: ${({ theme }) => theme.text};
//     font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
//     transition: all 0.50s linear;
//   }
//   `;

/* .app {
    font-family: 'Poppins', sans-serif;
    line-height: 1.5;
    color: var(--clr-fg);
    background-color: var(--clr-bg);
  }
  
  .light {
    --clr-bg: #fcfcfc;
    --clr-bg-alt: #fff;
    --clr-fg: #555;
    --clr-fg-alt: #444;
    --clr-primary: #2978b5;
    --shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  
  .dark {
    --clr-bg: #23283e;
    --clr-bg-alt: #2a2f4c;
    --clr-fg: #bdbddd;
    --clr-fg-alt: #cdcdff;
    --clr-primary: #90a0d9;
    --shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
  
  main {
    max-width: 1100px;
    width: 95%;
    margin: 0 auto;
  }
  
  .section {
    margin-top: 5em;
  }
  
  .section__title {
    text-align: center;
    margin-bottom: 1em;
    text-transform: uppercase;
  }
  
  .center {
    display: flex;
    align-items: center;
  }
  
  .link {
    color: var(--clr-primary);
    padding: 0 0 0.3em 0;
    position: relative;
  }
  
  .link:hover {
    color: var(--clr-primary);
  }
  
  .link::before {
    content: '';
    display: inline;
    width: 0%;
    height: 0.2em;
    position: absolute;
    bottom: 0;
    background-color: var(--clr-primary);
    transition: width 0.2s ease-in;
  }
  
  .link:hover::before,
  .link:focus::before {
    width: 100%;
  }
  
  .link--nav {
    color: var(--clr-fg);
    text-transform: lowercase;
    font-weight: 500;
  }
  
  .link--icon {
    color: var(--clr-fg);
  }
  
  .btn {
    display: block;
    cursor: pointer;
    padding: 0.8em 1.4em;
    font-weight: 500;
    font-size: 0.9rem;
    text-transform: lowercase;
    transition: transform 0.2s ease-in-out;
  }
  
  .btn--outline {
    color: var(--clr-primary);
    border: 2px solid var(--clr-primary);
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  
  .btn--outline:hover,
  .btn--outline:focus {
    color: var(--clr-bg);
  }
  
  .btn--outline:before {
    content: '';
    position: absolute;
    background-color: var(--clr-primary);
    right: 100%;
    bottom: 0;
    left: 0;
    top: 0;
    z-index: -1;
    transition: right 0.2s ease-in-out;
  }
  
  .btn--outline:hover:before,
  .btn--outline:focus:before {
    right: 0;
  }
  
  .btn--plain {
    text-transform: initial;
    background-color: var(--clr-bg-alt);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    border: 0;
  }
  
  .btn--plain:hover {
    transform: translateY(-4px);
  }
  
  .btn--icon {
    padding: 0;
  }
  
  .btn--icon:hover,
  .btn--icon:focus {
    color: var(--clr-primary);
  }
  
  .btn--icon:active {
    transform: translateY(-5px);
  }
  
  @media (max-width: 600px) {
    .section {
      margin-top: 4em;
    }
  } */
