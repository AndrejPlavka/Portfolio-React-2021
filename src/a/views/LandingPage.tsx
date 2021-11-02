import { Intro } from "../components/home/Intro";
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
        initial="out"
        animate="in"
        exit="out"
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
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 100%;
  width: 100%;
  .div {
    z-index: -1;
    display: flex;
    flex-direction: column;
    align-content: center;
    height: 100%;
    width: 100%;
  }
  //   margin-top: 3em;
`;

// exm 1.
// const ParentComponent = () => {
//   const [loading, setLoading] = useState(true) // generally when doing http requests this is false initially and when starting the request you set it to true, but this case is a bit different

//   useEffect(() => {setTimeout(() => {setLoading(false)}, 2000)}, []) // this will execute the code inside the effect once the component is rendered - same as componentDidMount() in class-based components.

//   return loading ? <Loader /> : <MainPage />
