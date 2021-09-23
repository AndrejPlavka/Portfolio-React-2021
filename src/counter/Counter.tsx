import { Buttons } from "./Buttons";
import { Component } from "react";
import { theme } from "./theme";
import styled from "styled-components";

//STYLED COMPONENTS - CSS
export const H1 = styled.h1`
  text-align: center;
  color: ${theme.blackish};
  border: 2px solid ${theme.blackish};
  border-radius: 3px;
  padding: 20px;
  width: 28rem;
`;

export const Button = styled.button`
  color: ${theme.blue};
  font-size: ${theme.small};
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${theme.blackish};
  border-radius: 3px;
  align-self: center;
  opacity: 0.7;
`;

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid ${theme.blue};
  height: 40rem;
  width: 40rem;
  font-size: ${theme.small};
  margin: auto;
  margin-top: 100px;
  background: linear-gradient(to right, #2193b0, #6dd5ed);
  border-radius: 3px;
`;

export const DivCounter = styled.div`
  color: ${theme.blackish};
  font-size: ${theme.medium};
  font-weight: 500;
`;

// Props
type State = { counter: number };
type Props = {};

// Class component
export class Counter extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { counter: 0 };
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  // Handlers
  // ARR FUNCTIONS
  handleIncrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  // METHOD --> bind(this) lepsie pre velky pocet iteracii, inak pouzivat =>
  handleDecrement() {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  }

  render() {
    //Template
    return (
      <DivContainer>
        <H1>Counter</H1>
        {/* DUMB ELEMENT Buttons */}
        <Buttons
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
        />
        <DivCounter>{this.state.counter}</DivCounter>
      </DivContainer>
    );
  }
}
