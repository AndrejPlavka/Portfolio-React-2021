import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React from "react";

//Syles
// import { GlobalStyle } from "./GlobalStyles";
// import styled from "styled-components";

//Components - Projects
import { Blog } from "./blog/BlogApp";
import { Counter } from "./counter/Counter";
import { HackerApp } from "./hackertyper/HackerApp";
import { HomePage } from "./home/HomePage";
import { NavBar } from "./home/NavBar";
import { PexesoApp } from "./pexeso/PexesoApp";
import { TodoApp } from "./todoapp/TodoApp";
import { TunesApp } from "./tunesapp/TunesApp";
import { UserList } from "./practise/Practise";

// html,
// body {
//   color: #fff;
// }
// const DivMain = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   width: 100%;
//   padding-top: 2rem;
//   align-items: center;
//   font-family: "Calibri";
// `;

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
  // Template - Projets Routes
  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/counter" component={Counter} />
          <Route path="/todoapp" component={TodoApp} />
          <Route path="/hackertyper" component={HackerApp} />
          <Route path="/pexeso" component={PexesoApp} />
          <Route path="/blog" component={Blog} />
          <Route path="/tunesapp" component={TunesApp} />
          <Route path="/practise" component={UserList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
/*npm run lint:fix*/
