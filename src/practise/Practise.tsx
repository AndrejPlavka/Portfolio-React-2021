import { Component } from "react";
import React from "react";
import styled from "styled-components";

//Styled elemtns
const DivWrapper = styled.div`
  margin: 15rem;
  display: block;
  text-align: left;
  background: blue;
  color: black;
`;

type Props = {};
type State = {
  users: number[];
};

export class UserList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-console
    console.log("did mount");
  }

  render() {
    return (
      <DivWrapper>
        <div>
          <button
            onClick={() => {
              this.setState((p) => ({
                users: [generateUserId(), ...p.users],
              }));
            }}
          >
            Add user
          </button>
        </div>

        <ul>
          {this.state.users.map((userId, index) => (
            <Item key={userId} userId={userId} index={index} />
          ))}
        </ul>
      </DivWrapper>
    );
  }
}

let generateUserId = () => {
  return Math.floor(Math.random() * 10000);
};

type ItemProps = {
  index: number;
  userId: number;
};
type ItemState = {
  counter: number;
};
export class Item extends Component<ItemProps, ItemState> {
  state = {
    counter: 0,
  };
  render() {
    return (
      <li>
        {this.props.index} {this.props.userId}
        <button
          onClick={() => {
            this.setState((p) => ({ counter: p.counter + 1 }));
          }}
        >
          {this.state.counter}
        </button>
      </li>
    );
  }
}
