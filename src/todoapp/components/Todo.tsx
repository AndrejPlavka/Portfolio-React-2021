import { TaskType } from "../TodoApp";
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

//styles
//Styled-components
import {
  IconCancel,
  IconCheck,
  IconDelete,
  IconEdit,
  IconTrash,
} from "../../a/assets/icons";
import { theme as todo } from "../theme";
import styled, { keyframes } from "styled-components/macro";

interface Props {
  task: TaskType;
  newTaskContent: string;
  isEditing: string;
  setEditing: React.Dispatch<React.SetStateAction<string>>;
  toggleTaskCompleted: (id: string) => void;
  deleteTask: (id: string) => void;
  handleSubmitT: (e: FormEvent<HTMLFormElement>, id: string) => void;
  handleChangeT: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Todo = (props: Props) => {
  const {
    task,
    newTaskContent,
    isEditing,
    toggleTaskCompleted,
    deleteTask,
    setEditing,
    handleChangeT,
    handleSubmitT,
  } = props;

  // templates
  const editingTemplate = (
    <FormContent
      onSubmit={(e) => handleSubmitT(e, task.id)}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setEditing("");
        }
      }}
    >
      <DivContentInput>
        <label className="labelE" htmlFor={task.id}>
          Change to:
          {/* {task.taskContent} */}
        </label>
        <input
          id={task.id}
          className="inputE"
          type="text"
          value={newTaskContent}
          onChange={handleChangeT}
          autoFocus
          autoComplete="off"
        />
      </DivContentInput>
      <DivContentButton>
        <Button type="button" onClick={() => setEditing("")}>
          <div>{cancel}</div>
        </Button>
        <Button type="submit">
          <div>{save}</div>
        </Button>
      </DivContentButton>
    </FormContent>
  );
  const viewTemplate = (
    <DivContent>
      <DivContentInput>
        {/* If we were to use checked, as we would in regular HTML, React would log some warnings into our browser console relating to handling events on the checkbox, which we want to avoid. */}
        {/* When used as an attribute of <label>, the for attribute has a value which is the id of the form element it relates to. => <label for="username">Your name</label>
                                                                                                                                    <input type="text" id="username"> */}
        <div>
          <input
            className="inputW"
            id={task.id}
            type="checkbox"
            defaultChecked={task.completed}
            onChange={() => toggleTaskCompleted(task.id)}
          />
        </div>
        <label
          className="labelW"
          htmlFor={task.id}
          onDoubleClick={(e) => {
            setEditing(task.id);
          }}
        >
          {task.taskContent}
        </label>
      </DivContentInput>
      <DivContentButton>
        <Button type="button" onClick={() => setEditing(task.id)}>
          <div>{edit}</div>
        </Button>
        <Button type="button" onClick={() => deleteTask(task.id)}>
          <div>{trash}</div>
        </Button>
      </DivContentButton>
    </DivContent>
  );
  return (
    <LiMain>{isEditing === task.id ? editingTemplate : viewTemplate}</LiMain>
  );
};

// Styled components:
const edit = <IconEdit />;
const trash = <IconTrash />;
const cancel = <IconCancel />;
const save = <IconCheck />;

const fadeIn = keyframes`
0% {opacity: 0}
100% {opacity: 1}
`;

const LiMain = styled.li`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  animation: 1s ${fadeIn} forwards;
  margin: 1.2em 0;
  padding: 0 0 0 0.25em;
  box-shadow: ${todo.shadow_btn};
  min-height: 4em;
  border-radius: 0.15em;
`;

const DivContent = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  animation: 1s ${fadeIn} forwards;
`;

const FormContent = styled.form`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  animation: 1s ${fadeIn} forwards;
`;

const DivContentInput = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  align-items: center;
  .inputW {
    display: flex;
    align-self: center;
    width: 2em;
    height: 2em;
    margin: 0.5em;
  }

  .labelW {
    display: flex;
    width: 100%;
    min-width: 15.5em;
    align-items: center;
    font-size: 1em;
    padding: 0.5em;
  }

  .inputE {
    display: flex;
    width: 100%;
    align-items: center;
    font-size: 1em;
    padding: 0.5em;
    border: none;
    border-bottom: 1px solid lightgray;
    background: ${todo.backgroundPrimary};
  }

  .labelE {
    display: flex;
    font-size: 1.2em;
    width: auto;
    height: 2.5em;
    margin: 0.5em;
  }
`;

const DivContentButton = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  /* button {
    display: flex;
    align-self: center;
    width: 2.2em;
    height: 2.2em;
    margin: 0.5em;
    padding: 0.3em;
    border: none;
    border-radius: 50%;
    outline: none;
    background: none;
    transition: 100ms linear;
    :hover {
      box-shadow: ${todo.shadow_btn};
    }
  } */
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  margin: 0.5em;
  padding: 0.3em;
  border: none;
  border-radius: 50%;
  outline: none;
  background: none;
  transition: 100ms linear;
  color: ${todo.textPrimary};
  div {
    width: 2.2em;
    height: 2.2em;
  }
  :hover {
    box-shadow: ${todo.shadow_btn};
  }
`;
