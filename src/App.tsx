// System
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React, { useRef } from "react";

//Syles
import styled from "styled-components/macro";

//Components:
// Projects:
import { Blog } from "./blog/BlogApp";
import { Counter } from "./counter/Counter";
import { HackerApp } from "./hackertyper/HackerApp";
import { PexesoApp } from "./pexeso/PexesoApp";
import { TodoApp } from "./todoapp/TodoApp";
import { TunesApp } from "./tunesapp/TunesApp";
// Main page:
import { About } from "./a/views/About";
import { Contact } from "./a/views/Contact";
import { Footer } from "./a/components/navigation2/Footer";
import { LandingPage } from "./a/views/LandingPage";
import { Navbar } from "./a/components/navigation2/Header";
import { Portfolio } from "./a/views/Portfolio";
import { ScrollComponent } from "./a/components/navigation2/ScrollComponent";

// Styled components:
const Div = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
`;
const DivContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 3em;
  overflow-x: hidden;
  /* padding-bottom: 2.5em; */
  /* overflow-y: scroll; */
`;
// const NavStyled = styled.nav`
//   height: 40px;
//   display: flex;
//   justify-content: space-evenly;
// `;

// const LinkStyled = styled(NavLink)`
//   font-weight: bold;
//   font-family: "Calibri";
//   text-decoration: none;
//   font-size: 20px;
//   :hover {
//     opacity: 0.8;
//   }
// `;

// const LinkProject = styled(LinkStyled)`
//   &.active {
//     filter: brightness(1.3);
//     text-decoration: underline;
//   }
// `;

function App() {
  // Template - Projets Routesconst
  return (
    // <ThemeProvider>
    <Router>
      <Div>
        <Navbar />
        <DivContent>
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/counter" component={Counter} />
            <Route path="/todoapp" component={TodoApp} />
            <Route path="/hackertyper" component={HackerApp} />
            <Route path="/pexeso" component={PexesoApp} />
            <Route path="/blog" component={Blog} />
            <Route path="/tunesapp" component={TunesApp} />
            {/* <Route path="/development" component={PortfolioApp} /> */}
          </Switch>
        </DivContent>

        <ScrollComponent />
        <Footer />
      </Div>
      {/* </ThemeProvider> */}
    </Router>
  );
}

export default App;
