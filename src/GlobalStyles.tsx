import styled, { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
    body {
      height:100vh;
      /* box-sizing: inherit; */
      margin: 0;
      padding: 0;
      /* padding: 0; */
      background-color: #fcfcfc;
      color: #000000;
      font-family: 'Source Sans Pro', sans-serif;
      /* @media screen and (min-width: 620px) {
          font-size: 1.9rem;
          line-height: 1.31579;
      } */

    }

    html {
      box-sizing: border-box;
      margin: 0;
      padding:0;
      /* font: 62.5% / 1.15 'Source Sans Pro', sans-serif; */
      height:100vh;
    }

    body > #root > div {
	    height: 100vh;
    }
    /* *, *:before, *:after {
      box-sizing: inherit;
    } */
    

    /* h1,
    h2 {
      margin-bottom: 0;
    }

    ul {
      list-style: none;
      padding: 0;
    } */

    /* button {
      border: none;
      margin: 0;
      padding: 0;
      width: auto;
      overflow: visible;
      background: transparent;
      color: inherit;
      font: inherit;
      line-height: normal;
      -webkit-font-smoothing: inherit;
      -moz-osx-font-smoothing: inherit;
      -webkit-appearance: none;
    } */

    /* button::-moz-focus-inner {
      border: 0;
    } */

    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit;
      font-size: 100%;
      line-height: 1.15;
      margin: 0;
    }
    
    button,
    input {
      overflow: visible;
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
      background: black;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: gray;
    }

    input:focus-visible {
      outline: none;
    }

    textarea:focus-visible {
      outline: none;
    }

    input:focus {
      border: 2px solid #128cf0 !important;
    }

    /* textarea::-webkit-resizer {
      border-width: 3px;
      border-color: transparent;
    } */

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
