import React from "react";

// STYLES
import "./About.scss";

// COMPONENT
export const About = () => {
  let texth1 = "What's this all aboute?";
  // TEMPLATE
  return (
    <article className="about">
      <h1>{texth1}</h1>

      <p>
        This is a practise <strong>SinglePage</strong> app project writen in{" "}
        <strong>React</strong> (create-react-app) & <strong>TypeScript</strong>{" "}
        styled by <strong>SCSS</strong>. Structure is made by using {"=>"}{" "}
        functions, components & hooks in TDD flow.
      </p>

      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        React
      </a>
    </article>
  );
};
