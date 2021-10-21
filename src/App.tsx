import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React from "react";

//Syles
import styled from "styled-components/macro";

//Components - Projects
import { Blog } from "./blog/BlogApp";
import { Counter } from "./counter/Counter";
import { HackerApp } from "./hackertyper/HackerApp";
import { Home } from "./tunesapp/views/Home";
// import { HomePage } from "./a/components/home/HomePage";
import { About } from "./a/views/About";
import { Footer } from "./a/components/navigation2/Footer";
import { LandingPage } from "./a/views/LandingPage";
import { NavBar } from "./home1/NavBar";
import { Navbar } from "./a/components/navigation2/Header";
import { PexesoApp } from "./pexeso/PexesoApp";
// import { PortfolioApp } from "./a/PortfolioApp";
import { ProjectList } from "./a/components/portfolio/ProjectList";
import { ScrollComponent } from "./a/components/navigation2/ScrollComponent";
import { Sidebar } from "./a/components/navigation2/Sidebar";
import { TodoApp } from "./todoapp/TodoApp";
import { TunesApp } from "./tunesapp/TunesApp";

const DivMain = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  width: 100%;
  padding-top: 2rem;
  align-items: center;
  font-family: "Calibri";
`;
// PortfolioApp
const Div = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
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
  // const { themeName } = useContext(ThemeContext);
  // Template - Projets Routesconst
  return (
    // <ThemeProvider>
    <Router>
      <Div>
        <Navbar />

        {/* <DivMain> */}
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={ProjectList} />

          <Route path="/counter" component={Counter} />
          <Route path="/todoapp" component={TodoApp} />
          <Route path="/hackertyper" component={HackerApp} />
          <Route path="/pexeso" component={PexesoApp} />
          <Route path="/blog" component={Blog} />
          <Route path="/tunesapp" component={TunesApp} />
          {/* <Route path="/development" component={PortfolioApp} /> */}
        </Switch>
        {/* </DivMain> */}

        <ScrollComponent />
        <Footer />
      </Div>
      {/* </ThemeProvider> */}
    </Router>
  );
}

export default App;
