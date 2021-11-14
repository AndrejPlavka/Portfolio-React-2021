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
        This is a practise <span>SinglePage</span> app project writen in{" "}
        <span>React</span> ( create-react-app ) & <span>TypeScript</span> styled
        by <span>SCSS</span>. Structure is made by using {"=>"} functions,
        components & hooks in TDD flow.
      </p>
    </article>
  );
};
