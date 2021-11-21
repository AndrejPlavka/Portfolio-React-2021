import React, { ChangeEvent, FormEvent, useState } from "react";
// Styles:
import { IconAdd } from "../../a/assets/icons";
import { theme as todo } from "../theme";
import styled from "styled-components/macro";
interface Props {
  // addTask: (taskContent: string) => void;
  handleSubmitIF: (e: FormEvent<HTMLFormElement>) => void;
  handleChangeIF: (e: ChangeEvent<HTMLInputElement>) => void;
  handleKeyDownIF: (e) => void;
  taskContent: string;
  error: string;
  contentInputFormRef: any;
  // taskInputRefContent: React.MutableRefObject<null>;
}

// Component:
export const InputForm = (props: Props) => {
  const {
    handleSubmitIF,
    handleChangeIF,
    handleKeyDownIF,
    error,
    taskContent,
    contentInputFormRef,
  } = props;
  // alternative:
  // hooks - states
  // const [taskContent, setTaskContent] = useState<string>("");
  // handlers
  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   props.addTask(taskContent);
  //   setTaskContent("");
  // };
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setTaskContent(e.target.value);
  // };

  // template
  return (
    <FormContent onSubmit={handleSubmitIF} onKeyDown={handleKeyDownIF}>
      {/* <h2 className="h2">
        <label htmlFor="new-todo-input">What needs to be done?</label>
      </h2> */}
      <DivContent>
        <input
          type="text"
          autoComplete="off"
          placeholder={error}
          id="new-todo-input"
          name="text"
          value={taskContent}
          onChange={handleChangeIF}
          ref={contentInputFormRef}
        />
        <Button type="submit">
          <div>{add}</div>
        </Button>
      </DivContent>
    </FormContent>
  );
};

// Styled components:
const add = <IconAdd />;
const FormContent = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 0 1.25em;
`;

const DivContent = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  height: 5em;
  border-radius: 0.15em;
  box-shadow: ${todo.shadow_btn};
  input {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0 0 0 0.5em;
    padding: 0.5em;
    font-size: 1.5em;
    border: none;
    background: ${todo.backgroundPrimary};
    ::placeholder {
      font-size: 1em;
      font-weight: 400;
      color: ${todo.textFaded};
    }
  }
  /* button {
    display: flex;
    align-self: center;
    width: 3em;
    height: auto;
    margin: 0.5em 1em 0.5em 0.5em;
    padding: 0.5em;
    border: none;
    border-radius: 50%;
    outline: none;
    background: none;
    color: ${todo.textFaded};
    transition: 100ms linear;
    :hover {
      box-shadow: ${todo.shadow_btn};
      color: ${todo.textPrimary};
    } 
  }*/
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  margin: 0.5em 1em 0.5em 0.5em;
  padding: 0.5em;
  border: none;
  border-radius: 50%;
  outline: none;
  background: transparent;
  color: ${todo.textFaded};
  transition: 100ms linear;
  div {
    width: 2em;
    height: 2em;
    /* margin: 0 0.25em 0 0; */
  }
  :hover {
    box-shadow: ${todo.shadow_btn};
    color: ${todo.textPrimary};
  }
`;
