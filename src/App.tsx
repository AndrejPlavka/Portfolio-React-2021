// System
import { Route, Switch, useLocation } from "react-router-dom";

//Syles
import { AnimatePresence } from "framer-motion";
import styled from "styled-components/macro";

//Components:
// Projects:
import { Blog } from "./blog/BlogApp";
import { CounterApp } from "./counter/CounterApp";
import { HackerApp } from "./hackertyper/HackerApp";
import { PexesoApp } from "./pexeso/PexesoApp";
import { TodoApp } from "./todoapp/TodoApp";
import { TunesApp } from "./tunesapp/TunesApp";
// Main page:
import { About } from "./a/views/About";
import { Contact } from "./a/views/Contact";
import { Footer } from "./a/components/navigation/Footer";
import { LandingPage } from "./a/views/LandingPage";
import { Navbar } from "./a/components/navigation/Header";
import { Portfolio } from "./a/views/Portfolio";
import { ScrollComponent } from "./a/components/navigation/ScrollComponent";

// Styled components:
const Div = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
`;
const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-bottom: 3em;
  overflow-x: hidden;
`;

function App() {
  const location = useLocation();

  return (
    <>
      <Div>
        <DivContent>
          <Navbar />

          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route path="/" component={LandingPage} exact />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
              <Route path="/counter" component={CounterApp} />
              <Route path="/todoapp" component={TodoApp} />
              <Route path="/hackertyper" component={HackerApp} />
              <Route path="/pexeso" component={PexesoApp} />
              <Route path="/blog" component={Blog} />
              <Route path="/tunesapp" component={TunesApp} />
              {/* <Route path="/development" component={PortfolioApp} /> */}
            </Switch>
          </AnimatePresence>
        </DivContent>

        <ScrollComponent />
        <Footer />
      </Div>
    </>
  );
}

export default App;
//ex-eg -> exempli gratia (example)
