import styled, { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding:0;
    }

   
    html {
      box-sizing: border-box;
      margin: 0;
      padding:0;
      html{scroll-behavior:smooth};
      /* font: 62.5% / 1.15 'Source Sans Pro', sans-serif; */
    }
    
    
    body {
      height:100vh;
      width:100%;
      overflow-x: hidden;
      /* width: 100vw; */
      /* margin-right: calc(100vw - 100%); */
      /* margin-right: calc(-1 * (100vw - 100%)); */
      margin: 0;
      padding: 0;
      background-color: #fcfcfc;
      color: #000000;
      /* font-family: 'Source Sans Pro', sans-serif; */
      font-family: 'Roboto','Source Sans Pro', sans-serif;
      font-size: 1em;
      line-height: 1.45;
      /* @media screen and (min-width: 620px) {
          font-size: 1.9rem;
          line-height: 1.31579;
      } */
    }

    
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
      /* display: none; */
      width: 5px;
    }
     
    ::-webkit-scrollbar-track {
      display: none;
      z-index: -1;
      /* background: none; */
      opacity: 0.5;
    }
     
    ::-webkit-scrollbar-thumb {
      background: #9c9c9c;
      border-radius: 3px;
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

    /* input:focus {
      border: 2px solid #128cf0 !important;
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
