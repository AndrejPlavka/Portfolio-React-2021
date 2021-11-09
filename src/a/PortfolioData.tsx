import { SidebarData } from "./components/navigation/SidebarData";
//@ts-ignore
import Pdf from "../a/documents/CV-Andrej plavka.pdf";
// icon imports
import {
  IconBadminton,
  IconBaking,
  IconBeer,
  IconBook,
  IconBootstrap,
  IconCSS2,
  IconCzech,
  IconEducation,
  IconEnglish,
  IconFB,
  IconFBC,
  IconGerman,
  IconGit,
  IconGitHub,
  IconHTML2,
  IconHiking,
  IconIG,
  IconIGC,
  IconIcebathing,
  IconJS,
  IconLinkedIn,
  IconLinkedInC,
  IconMailPlane2,
  IconMarkdown,
  IconReact,
  IconRedux,
  IconRouter,
  IconRunning,
  IconSASS,
  IconSlovak,
  IconStar,
  IconStyledComponent,
  IconTS,
  IconUdemy,
  IconUdemyText,
  IconUkulele,
  IconWorkout,
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
const Udemy = <IconUdemy />;
// hobbies icons:
const Hiking = <IconHiking />;
const Workout = <IconWorkout />;
const Runnig = <IconRunning />;
const Badminton = <IconBadminton />;
const Icebathing = <IconIcebathing />;
const Ukulele = <IconUkulele />;
const Baking = <IconBaking />;
const Beer = <IconBeer />;
const Books = <IconBook />;
// languages icons:
const Slovak = <IconSlovak />;
const Czech = <IconCzech />;
const English = <IconEnglish />;
const German = <IconGerman />;

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
      // display: "flex",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      height: "100%",
      width: "100%",
      margin: "0",
      padding: "0 0.5em",
      fontFamily: "Milion, Roboto",
      fontSize: "0.75em",
      lineHeight: "1em",
      borderRadius: "1px",
      color: "white",
      background: "rgb(52, 184, 186)",
      overflow: "hidden",
    }}
  >
    LEARN 2CODE
  </div>
);

const Cleverlance = (
  <div
    style={{
      // display: "flex",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      height: "100%",
      width: "100%",
      margin: "0",
      padding: "0 0.5em",
      fontFamily: "'Baloo 2', cursive",
      fontSize: "0.8em",
      lineHeight: "1em",
      borderRadius: "1px",
      color: "white",
      background: "rgb(70, 5, 112)",
      overflow: "hidden",
    }}
  >
    Clever lance
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
    img: Udemy,
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

// Hobbies section ***************************************************************
export type HobbiesType = {
  name: string;
  img: JSX.Element;
  level?: string;
  lvl?: JSX.Element;
};

const hobbies = [
  {
    name: "Hiking",
    img: Hiking,
    level: "bilbo",
    lvl: Star,
  },
  {
    name: "Workout",
    img: Workout,
    level: "adv",
    lvl: Star,
  },
  {
    name: "Runnig",
    img: Runnig,
    level: "adv",
    lvl: Star,
  },
  {
    name: "Badminton",
    img: Badminton,
    level: "basic",
    lvl: Star,
  },
  {
    name: "Icebathing",
    img: Icebathing,
    level: "buff",
    lvl: Star,
  },
  {
    name: "Ukulele",
    img: Ukulele,
    level: "basic",
    lvl: Star,
  },
  {
    name: "Baking",
    img: Baking,
    level: "wizard",
    lvl: Star,
  },
  {
    name: "Beer",
    img: Beer,
    level: "jedi",
    lvl: Star,
  },
  {
    name: "Books",
    img: Books,
    level: "geek",
    lvl: Books,
  },
];
// Hobbies section ***************************************************************
export type LanguagesType = {
  name: string;
  img: JSX.Element;
  level?: string;
  lvl?: JSX.Element;
};

const languages = [
  {
    name: "Slovak",
    img: Slovak,
    level: "native",
    lvl: Star,
  },
  {
    name: "Czech",
    img: Czech,
    level: "C2",
    lvl: Star,
  },
  {
    name: "English",
    img: English,
    level: "B2",
    lvl: Star,
  },
  {
    name: "German",
    img: German,
    level: "A2",
    lvl: Star,
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

export {
  header,
  cv,
  footer,
  about,
  projects,
  skills,
  contact,
  experiences,
  hobbies,
  languages,
};
