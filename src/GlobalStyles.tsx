import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      background-color: #fcfcfc;
      color: #000000;
      font-family: 'Source Sans Pro', sans-serif;
    }

    a,
    button,
    input,
    textarea {
      color: #19609c;
      border-color: #19609c;
    }

    hr {
      border-color: #19609c;
    }

    button:hover {
      opacity: 0.8;
    }

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: rgba(17, 64, 104, 0.2);
    }

    ::-webkit-scrollbar-thumb {
      background: #114068;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #563c7e;
    }

    input:focus-visible {
      outline: none;
    }

    textarea:focus-visible {
      outline: none;
    }

    input:focus {
      border: 2px solid #1a639f !important;
    }

    textarea::-webkit-resizer {
      border-width: 3px;
      border-color: transparent;
    }

    ::-webkit-scrollbar-corner {
      background: transparent;
    }
`;
// export const GlobalStyle = createGlobalStyle`
//     *{
//         box-sizing: border-box;
//         margin: 0;
//         padding:0;
//         font-family: 'Source Sans Pro', sans-serif;
//     }
// `;

// export const DivContainer = styled.div`
//   z-index: 1;
//   width: 100%;
//   max-width: 1300px;
//   margin-left: auto;
//   margin-right: auto;

//   @media screen and (max-width: 991px) {
//     padding-left: 50 px;
//     padding-right: 50 px;
//   }
// `;

// body {
//   margin: 0;
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
//     "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
//     sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
// }

// code {
//   font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
//     monospace;
// }
