import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { about } from "../PortfolioData";
import React from "react";

// Syles
import styled from "styled-components/macro";

// Component
export const About = () => {
  const { name, role, description, resume, social } = about;

  // Template
  return (
    <DivAbout>
      {name && (
        <h1>
          Hi, I am <span className="about__name">{name}.</span>
        </h1>
      )}

      {role && <h2 className="about__role">A {role}.</h2>}
      <p className="about__desc">{description && description}</p>

      <div className="about__contact center">
        {resume && (
          <a href={resume}>
            <span className="btn btn--outline">Resume</span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
              >
                <IoLogoGithub />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
              >
                <IoLogoLinkedin />
              </a>
            )}
          </>
        )}
      </div>
    </DivAbout>
  );
};

// Styled components:
const DivAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  //   margin-top: 3em;
`;

// .about__name {
//   color: var(--clr-primary);
// }

// .about__role {
//   margin-top: 1.2em;
// }

// .about__desc {
//   font-size: 1rem;
//   max-width: 600px;
// }

// .about__desc,
// .about__contact {
//   margin-top: 2.4em;
// }

// .about .link--icon {
//   margin-right: 0.8em;
// }

// .about .btn--outline {
//   margin-right: 1em;
// }

// @media (max-width: 600px) {
//   .app .about {
//     align-items: flex-start;
//     margin-top: 2em;
//   }
// }
