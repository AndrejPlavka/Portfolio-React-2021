import { mathOperation } from "./actions";
import { useDispatch, useSelector } from "react-redux";

// Styles:
import { theme as counter } from "./theme";
import { theme } from "../GlobalStyles";
import styled, { keyframes } from "styled-components";

const currentValue = (state: any) => state.counter;
export const CounterTemplate = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(currentValue);
  return (
    <DivCounter>
      <H1>Do The Math</H1>
      {counterValue.error === "infinityError" && <Error>Infinity</Error>}
      {counterValue.error === "negativeRoot" && (
        <Error>Cannot square - x</Error>
      )}
      <DivNumber>{counterValue.value}</DivNumber>

      <DivButtons>
        <Button onClick={() => dispatch(mathOperation.increment(1))}>
          x + 1
        </Button>
        <Button onClick={() => dispatch(mathOperation.increment(2))}>
          x + 2
        </Button>
        <Button onClick={() => dispatch(mathOperation.pow(2))}>
          x<sup>2</sup>
        </Button>
        <Button onClick={() => dispatch(mathOperation.pow(counterValue.value))}>
          x<sup>x</sup>
        </Button>
        <Button onClick={() => dispatch(mathOperation.decrement(1))}>
          x - 1
        </Button>
        <Button onClick={() => dispatch(mathOperation.decrement(2))}>
          x - 2
        </Button>
        <Button onClick={() => dispatch(mathOperation.div(2))}>x /2</Button>
        <Button onClick={() => dispatch(mathOperation.sqrt())}>√x</Button>
      </DivButtons>
    </DivCounter>
  );
};

// Styled components:
const fadeIn = keyframes`
0% {opacity: 0}
100% {opacity: 1}`;

const DivCounter = styled.div`
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
  padding: 6em 3em;
  animation: 1s ${fadeIn} forwards;
`;

const H1 = styled.h1`
  font-size: 3.5em;
  font-weight: 100;
  margin: 0.5em 0;
  text-align: center;
  color: ${counter.black};
  @media (${theme.sm_min_768}) {
    font-size: 4em;
  }
`;
const DivNumber = styled.div`
  background: ${counter.white};
  font-size: 3.5em;
  padding: 0.25em;
  text-align: center;
  font-weight: ${counter.boldFont};
  color: ${counter.black};
  margin: 0 auto;
  margin-bottom: 0.5em;
  @media (${theme.sm_min_768}) {
    font-size: 4em;
  }
`;

const Error = styled.div`
  display: block;
  align-self: center;
  position: absolute;
  font-size: 1em;
  padding: 1em 1em;
  text-align: center;
  width: 30%;
  top: 10%;
  margin: 1em auto;
  border-radius: 0.25em;
  font-weight: ${counter.boldFont};
  background: ${counter.red};
  color: ${counter.white};
  animation: 1.5s ${fadeIn} forwards;
`;

const Button = styled.button`
  width: 45%;
  height: 3.5em;
  margin-bottom: 1em;
  padding: 1em 2em;
  font-weight: ${counter.boldFont};
  border: none;
  /* border: 1px solid ${counter.black}; */
  border-radius: 2em;
  background: ${counter.white};
  box-shadow: ${counter.shadow_l};
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 0.85;
    transition: 0.25s ease;
    background: ${counter.black};
    color: ${counter.white};
  }
`;
const DivButtons = styled.div`
  width: 100%;
  flex-wrap: wrap;
  margin: auto;
  display: flex;
  justify-content: space-between;
  @media (${theme.sm_min_768}) {
    width: 50%;
  }
`;
