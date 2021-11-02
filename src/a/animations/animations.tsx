export const animationOne = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export const animationTwo = {
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: "-100vh",
    scale: 0.3,
  },
};
//   from: { opacity: 0, transform: "translate(100%, 0)" },
//   enter: { opacity: 1, transform: "translate(0%, 0)" },
//   leave: { opacity: 0, transform: "translate(-50%, 0)" }
export const animationThree = {
  in: {
    opacity: 1,
    x: "-100%",
  },
  out: {
    opacity: 0,
    x: "100%",
    scale: 1,
  },
  end: {
    x: 0,
    opacity: 1,
  },
};

export const transition = {
  duration: 1,
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
