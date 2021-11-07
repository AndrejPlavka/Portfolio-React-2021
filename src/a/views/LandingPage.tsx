import { Intro } from "../components/landing-page/IntroLP";
import { ProjectList } from "../components/portfolio/ProjectList";
import React, { useContext } from "react";

// Styles:
import {
  animationOne,
  animationThree,
  transition,
} from "../animations/animations";
import { motion } from "framer-motion";
import styled from "styled-components/macro";

// Component:
export const LandingPage = () => {
  // const { themeName } = useContext(ThemeContext);

  return (
    <DivHome>
      <motion.div
        className="div"
        initial="start"
        animate="in"
        exit="end"
        variants={animationOne}
        transition={transition}
      >
        <Intro />
        <ProjectList />
      </motion.div>
    </DivHome>
  );
};

// Styled components:
const DivHome = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 100%;
  width: 100%;
  .div {
    display: flex;
    flex-direction: column;
    align-content: center;
    height: 100%;
    width: 100%;
  }
  //   margin-top: 3em;
`;
// from: { opacity: 0, transform: "translate(100%, 0)" },
// enter: { opacity: 1, transform: "translate(0%, 0)" },
// leave: { opacity: 0, transform: "translate(-50%, 0)" }
// exm 1.
// const ParentComponent = () => {
//   const [loading, setLoading] = useState(true) // generally when doing http requests this is false initially and when starting the request you set it to true, but this case is a bit different

//   useEffect(() => {setTimeout(() => {setLoading(false)}, 2000)}, []) // this will execute the code inside the effect once the component is rendered - same as componentDidMount() in class-based components.

//   return loading ? <Loader /> : <MainPage />
