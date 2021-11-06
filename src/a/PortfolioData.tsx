import { SidebarData } from "./components/navigation2/SidebarData";
//@ts-ignore
import Pdf from "../a/documents/CV-Andrej plavka.pdf";
// icon imports
import {
  IconBootstrap,
  IconCSS2,
  IconEducation,
  IconFB,
  IconFBC,
  IconGit,
  IconGitHub,
  IconHTML2,
  IconIG,
  IconIGC,
  IconJS,
  IconLinkedIn,
  IconLinkedInC,
  IconMailPlane2,
  IconMarkdown,
  IconReact,
  IconRedux,
  IconRouter,
  IconSASS,
  IconStar,
  IconStyledComponent,
  IconTS,
  IconUdemy,
  IconUdemyText,
} from "./assets/icons";

// Project icons:
const HTML = <IconHTML2 />;
const CSS = <IconCSS2 />;
const TS = <IconTS />;
const JS = <IconJS />;
const React = <IconReact />;
const Redux = <IconRedux />;
const SC = <IconStyledComponent />;
const Router = <IconRouter />;
const Markdown = <IconMarkdown />;
const GitHub = <IconGitHub />;
// contact icons:
const LinkedIn = <IconLinkedInC />;
const Instagram = <IconIGC />;
const Facebook = <IconFBC />;
const Mail = <IconMailPlane2 />;
// skils icons:
const Star = <IconStar />;
const Git = <IconGit />;
const SASS = <IconSASS />;
const Bootstrap = <IconBootstrap />;
const University = <IconEducation />;
const UdemyLogo = <IconUdemy />;
const UdemyText = <IconUdemyText />;

// Page Sections: *********************************************************
const header = {
  homepage: "https://",
  title: "AP.", // nahradit logom
  logo: "",
};

const footer = {
  text: "Andrej Plavka",
  homepage: "https://",
  logo: "",
};
// About page:
const about = {
  name: "Andrej Plavka",
  role: "Front End Engineer",
  description: "bla bla bla bla bla bla bla bla bla bla bla bla bla",
  resume: "https://",
  social: {
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
};
// Projects Section ***************************************************************************
export type ProjectType = {
  name: string;
  description: string;
  stack: JSX.Element[];
  sourceIcon: JSX.Element;
  sourceCode: string;
  livePreview: string;
};

// export const PortfolioIntro = {
//   tile: "Portfolio",
//   intro: "Chceck out some of my latest work",
//   text: "The portfolio currently consists of a selection of projects that I developed during the completion of various trainings (udemy, L2C, ITA). The projects are mainly focused on work in React.",
// };

const projects = [
  {
    name: "Hackertyper",
    description:
      "Bacome a hacker yourself! By pressing any key on keyboard you'll add a line of real code to fool your friends.",
    stack: [HTML, CSS, TS, React, SC],
    sourceIcon: GitHub,
    sourceCode: "https://github.com",
    livePreview: "/hackertyper",
    bgImg: "",
  },
  {
    name: "To-Do List",
    description:
      "Get all those tasks out of your head and add them to the local storage list to get an overview. A simple task application in which you learn how to add, edit, delete and filter tasks. Connect with hooks ",
    stack: [HTML, CSS, TS, React, SC, Router],
    sourceIcon: GitHub,
    sourceCode: "https://github.com",
    livePreview: "/todoapp",
    bgImg: "",
  },
  {
    name: "Memory Game",
    description:
      "Test your memory by playing! Memory games give space to critical thinking, which helps to develop attention to detail.",
    stack: [HTML, CSS, TS, React, SC],
    sourceIcon: GitHub,
    sourceCode: "https://github.com",
    livePreview: "/pexeso",
    bgImg: "",
  },
  {
    name: "Blog",
    description:
      "Create a blog to learn how to use local storage and a react router. Learn how to add, edit, or delete posts. ",
    stack: [HTML, CSS, TS, React, SC, Router, Markdown],
    sourceIcon: GitHub,
    sourceCode: "https://github.com",
    livePreview: "/blog",
    bgImg: "",
  },
  {
    name: "Tunes App",
    description:
      "Find your favorite music! Learn how to create a search form and use the iTunes API to build on the JSON experience! ",
    stack: [HTML, CSS, TS, React, SC, Router],
    sourceIcon: GitHub,
    sourceCode: "https://github.com",
    livePreview: "/tunesapp",
    bgImg: "",
  },
  {
    name: "Counter",
    description:
      "Create your first simple React application and learn the basics of React. Find out what the previous state is and why it is important.",
    stack: [HTML, CSS, TS, React, SC, Redux],
    sourceIcon: GitHub,
    sourceCode: "https://github.com",
    livePreview: "/counter",
    bgImg: "",
  },
];
// Skils section ***************************************************************
export type SkillType = {
  name: string;
  img: JSX.Element;
  level: string;
  lvl: JSX.Element;
};

const skills = [
  {
    name: "HTML",
    img: HTML,
    level: "basic",
    lvl: Star,
  },
  {
    name: "CSS",
    img: CSS,
    level: "basic",
    lvl: Star,
  },
  {
    name: "SASS",
    img: SASS,
    level: "basic",
    lvl: Star,
  },
  {
    name: "Bootstrap",
    img: Bootstrap,
    level: "basic",
    lvl: Star,
  },
  {
    name: "JavaScript",
    img: JS,
    level: "basic",
    lvl: Star,
  },
  {
    name: "TypeScript",
    img: TS,
    level: "basic",
    lvl: Star,
  },
  {
    name: "React",
    img: React,
    level: "basic",
    lvl: Star,
  },
  {
    name: "Git",
    img: Git,
    level: "basic",
    lvl: Star,
  },
];

// Experiences section ************************************************************
const L2C = (
  <div
    style={{
      borderRadius: "1px",
      color: "white",
      background: "rgb(52, 184, 186)",
      margin: "0",
      padding: "3px 10px",
      height: "30px",
      width: "100%",
      lineHeight: "100%",
      fontFamily: "Milion, Roboto",
      fontSize: "0.65em",
    }}
  >
    LEARN 2CODE
  </div>
);

const Cleverlance = (
  <div
    style={{
      // display: "flex",
      // justifyContent: "center",
      // alignContent: "center",
      borderRadius: "1px",
      color: "white",
      background: "rgb(70, 5, 112)",
      margin: "0",
      padding: "3px 10px",
      height: "30px",
      width: "100%",
      lineHeight: "100%",
      fontFamily: "'Baloo 2', cursive",
      fontSize: "0.65em",
    }}
  >
    Cleverlance
  </div>
);
export type ExpType = {
  name: string;
  level?: string;
  img: JSX.Element;
  text?: string;
};
const experiences = [
  {
    name: "Mechanical Engineering",
    level: "Master",
    img: University,
    text: "I studied at the Faculty of Mechanical Engineering in the field of Environmental Engineering, the subject Energy Machines and Equipment.",
  },
  {
    name: "Web Development Bootcamp",
    level: "",
    // img: UdemyText,
    img: UdemyLogo,
    text: " ,,The Complete 2021 Web Development Bootcamp,, which covers the basics of web development - HTML, CSS, Botstrap, Javascript, SQL, Node.js. Expres.js, React",
  },
  {
    name: "React",
    level: "",
    img: L2C,
    text: ",,Learn to Code,, course which covers the basics of work with React.",
  },
  {
    name: "Basics of OOP",
    level: "",
    img: L2C,
    text: " ,,Learn to Code,, course which covers the basics OOP with PHP.",
  },
  {
    name: "Testing Clever Academy",
    level: "",
    img: Cleverlance,
    text: "Bootcamp which covers the basics of software testing, test software analysis, databases and SQL, ",
  },
];

export type ContactType = {
  email: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  Mail: JSX.Element;
  LinkedIn: JSX.Element;
  Facebook: JSX.Element;
  Instagram: JSX.Element;
};
const contact = {
  email: "andrej.p.@gmail.com",
  instagram: "https://www.instagram.com/an_dre_jj/",
  facebook: "https://www.facebook.com/andrej.plavka",
  linkedin: "https://www.linkedin.com/in/andrej-plavka",
  Mail,
  LinkedIn,
  Facebook,
  Instagram,
};

const cv = {
  resume: Pdf,
};

export { header, cv, footer, about, projects, skills, contact, experiences };
