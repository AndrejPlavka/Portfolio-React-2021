import { GlobalStyle } from "./GlobalStyles";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>Andrej Plávka - React 2021</title>
    </Helmet>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
