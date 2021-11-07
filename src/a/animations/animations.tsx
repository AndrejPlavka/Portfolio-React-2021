export const animationOne = {
  start: {
    opacity: 0,
  },

  in: {
    opacity: 1,
  },

  end: {
    opacity: 0,
    x: "-100vh",
  },
};

export const animationTwo = {
  start: {
    opacity: 0,
    y: "-100vh",
    scale: 0.3,
  },

  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },

  end: {
    opacity: 0,
    y: "-100vh",
    scale: 0.3,
  },
};
//   from: { opacity: 0, transform: "translate(100%, 0)" },
//   enter: { opacity: 1, transform: "translate(0%, 0)" },
//   leave: { opacity: 0, transform: "translate(-50%, 0)" }
export const animationThree = {
  start: {
    opacity: 0,
    x: "100vh",
  },

  in: {
    opacity: 1,
    x: 0,
  },

  end: {
    x: "-100vh",
    opacity: 0,
  },
};

export const transition = {
  duration: 0.4,
};

// export const animationTwo = {
//   in: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//   },
//   out: {
//     opacity: 0,
//     y: "-100vh",
//     scale: 0.3,
//   },
// };
