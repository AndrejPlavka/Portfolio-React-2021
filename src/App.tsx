import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React from "react";

//Syles
import styled from "styled-components/macro";

//Components - Projects
import { Blog } from "./blog/BlogApp";
import { Counter } from "./counter/Counter";
import { HackerApp } from "./hackertyper/HackerApp";
import { HomePage } from "./portfolio/HomePage";
import { NavBar } from "./portfolio/NavBar";
import { PexesoApp } from "./pexeso/PexesoApp";
import { TodoApp } from "./todoapp/TodoApp";
import { TunesApp } from "./tunesapp/TunesApp";

const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  padding-top: 2rem;
  align-items: center;
  font-family: "Calibri";
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
    <Router>
      <div>
        <NavBar />
        <DivMain>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/counter" component={Counter} />
            <Route path="/todoapp" component={TodoApp} />
            <Route path="/hackertyper" component={HackerApp} />
            <Route path="/pexeso" component={PexesoApp} />
            <Route path="/blog" component={Blog} />
            <Route path="/tunesapp" component={TunesApp} />
          </Switch>
        </DivMain>
      </div>
    </Router>
  );
}

export default App;
/*npm run lint:fix*/
