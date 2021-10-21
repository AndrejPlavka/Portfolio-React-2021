const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://",
  title: "AP.", // nahradit logom
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
  stack: string[];
  sourceCode: string;
  livePreview: string;
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Project 1",
    description: "bla bla bla bla bla bla bla",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "Project 2",
    description: "ble ble ble ble ble ble",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "Project 3",
    description: "bli bli bli bli bli",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "Project 4",
    description: "bli bli bli bli bli",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "Project 5",
    description: "bli bli bli bli bli",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "Project 6",
    description: "bli bli bli bli bli",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
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
  // email is optional - if left empty Contact section won't show up
  email: "andrej.p.@gmail.com",
};

export { header, about, projects, skills, contact };
