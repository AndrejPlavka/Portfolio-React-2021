import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { TheNavigation } from "./components/TheNavigation";
import React from "react";

// Styles:
import "./TunesApp.scss";

// Views:
import { About } from "./views/About";
import { Home } from "./views/Home";
import { Tunes } from "./views/Tunes";

// Component:
export const TunesApp = () => {
  return (
    // <div>
    <Router basename="/tunesapp">
      <div className="App">
        <header>
          <TheNavigation />
        </header>

        <main className="content">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/tunes" component={Tunes} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
      </div>
    </Router>
    // </div>
  );
};
