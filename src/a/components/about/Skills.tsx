import { skills } from "../../PortfolioData";
import React from "react";

// Styles:
import styled from "styled-components/macro";

const randomID = () => Math.random().toString(36).substr(2, 8);

interface Props {}

export const Skills = (props: Props) => {
  if (!skills.length) return null;

  // Template:
  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>
      <ul className="skills__list">
        {skills.map((skill) => (
          <li key={randomID()} className="skills__list-item btn btn--plain">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

// .skills__list {
//     max-width: 450px;
//     width: 95%;
//     margin: 0 auto;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//   }

//   .skills__list-item {
//     margin: 0.5em;
//   }
