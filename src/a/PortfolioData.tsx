import { SidebarData } from "./components/navigation2/SidebarData";
//@ts-ignore
import Pdf from "../a/Documents/CV-Andrej plavka.pdf";
// icon imports
import {
  IconCSS2,
  IconGitHub,
  IconHTML2,
  IconJS,
  IconMarkdown,
  IconReact,
  IconRedux,
  IconRouter,
  IconStyledComponent,
  IconTS,
} from "./assets/icons";

// Icons:
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

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://",
  title: "AP.", // nahradit logom
  logo: "",
};

const footer = {
  text: "Andrej Plavka",
  homepage: "https://",
  logo: "",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Andrej Plavka",
  role: "Front End Engineer",
  description: "bla bla bla bla bla bla bla bla bla bla bla bla bla",
  resume: "https://",
  social: {
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
};

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

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "SASS",
  "Basics of UI/UX",
  "Git",
];

const contact = {
  email: "andrej.p.@gmail.com",
  phone: "",
};

const cv = {
  resume: Pdf,
};

export { header, cv, footer, about, projects, skills, contact };
