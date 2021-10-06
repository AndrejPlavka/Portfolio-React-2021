import { GlobalStyle } from "./GlobalStyles";
import { Helmet } from "react-helmet";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>React 2021 - Andrej Plávka</title>
    </Helmet>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
