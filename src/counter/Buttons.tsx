import { theme } from "./theme";
import styled from "styled-components";

//Styled components
export const Button = styled.button`
  color: ${theme.blue};
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${theme.blackish};
  border-radius: 3px;
  align-self: center;
  opacity: 0.7;
`;

// Props
type Props = {
  handleIncrement: () => void;
  handleDecrement: () => void;
};

// Component
export const Buttons = (props: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "3rem",
      }}
    >
      <Button onClick={props.handleIncrement}>+</Button>
      <Button onClick={props.handleDecrement}>-</Button>
    </div>
  );
};
