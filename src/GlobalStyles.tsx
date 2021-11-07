import styled, { createGlobalStyle } from "styled-components/macro";
export const theme = {
  // media:
  sx_min_425: "min-width: 425px",
  sm_min_768: "min-width: 768px",
  md_min_1024: "min-width: 1024px",
  lg_min_1200: "min-width: 1200px",
  xl_min_1600: "min-width: 1600px",
  // fonts:
  tinyFont: 100,
  // Colors:
  // Portfolio:
  intro_bg_w: "white",
  shadow_intro_s: "0 3px 5px -3px rgba(57, 63, 72, 0.3)",
  primaryBackground: "#fefefe",
  opacity_m: "0.65",
};

export const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding:0;
      html{scroll-behavior:smooth};
    }
    
    html {
      box-sizing: border-box;
      margin: 0;
      padding:0;
      
    }
    
    body {
      height:100%;
      width:100%;
      margin: 0;
      padding:0;
      overflow-x: hidden;
      background-color: #fcfcfc;
      color: #000000;
      font-family: 'Roboto','Source Sans Pro', sans-serif;
      
      font-size:10px;
      line-height:1.4;
       
      @media screen and (${theme.sx_min_425}){
          font-size:15px;
      }

      @media screen and (${theme.sm_min_768}){
          font-size:16px;
      }
    
      @media screen and (${theme.md_min_1024}){
          font-size:18px;
      }
    
      @media screen and (${theme.lg_min_1200}){
          font-size:20px;
      }
      @media screen and (${theme.xl_min_1600}){
          font-size:20px;
      } 
      /* h1 { font-size: 2.4rem;}
      h2 { font-size: 2rem; }
      h3 { font-size: 1.6rem; }
      h4 { font-size: 1.2rem; }
      h5 { font-size: 1rem; }

      @media screen and (${theme.sm_min_768}){
        h1 { font-size: 3rem;}
        h2 { font-size: 2.5rem; }
        h3 { font-size: 2rem; }
        h4 { font-size: 1.5rem; }
        h5 { font-size: 1rem; }
      } */
      /* margin-right: calc(100vw - 100%); */
      /* margin-right: calc(-1 * (100vw - 100%)); */
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
