import { SpanTaskDeadline, TodoTask } from "./TodoTask";
import { theme } from "./theme";
import React, { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";

//Styled-components
export const DivMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 90vh;
  font-family: Arial, Helvetica, sans-serif;
`;

export const DivHeader = styled.div`
  flex: 40%;
  background: linear-gradient(
    to right,
    ${theme.gradBlue1},
    ${theme.gradGreen1}
  );
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.95;
`;

export const DivInputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const InputTask = styled.input`
  width: 25rem;
  height: 3rem;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding-left: 10px;
  font-size: 1.3rem;
  border: 1px solid ${theme.white};
  font-weight: bold;
  margin: 0;
  color: ${theme.blackish};
  outline: none;
`;

export const InputDeadline = styled.input`
  width: 4rem;
  height: 3rem;
  text-align: center;
  font-size: 1.3rem;
  border: 1px solid ${theme.white};
  font-weight: bold;
  color: ${theme.blackish};
  outline: none;
`;

export const Button = styled.button`
  width: 8rem;
  height: 3rem;
  border: 1px solid ${theme.white};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  color: ${theme.blackish};
  background: linear-gradient(
    to right,
    ${theme.gradBlue2},
    ${theme.gradGreen2}
  );
`;

export const DivTodoList = styled.div`
  flex: 70%;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 50px;
  flex-direction: column;
`;

let generateId = () => {
  return Math.floor(Math.random() * 100000);
};
interface ITask {
  taskName: string;
  taskDeadline: number | string;
  taskId: number;
}

// Components - hooks - parent
export const TodoApp = () => {
  // States
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  // Handlers
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDeadline(e.target.value);
    }
  };

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      taskDeadline: deadline,
      taskId: generateId(),
    };

    if (newTask.taskName !== "" && newTask.taskDeadline !== "") {
      setTodoList((prevTodoList) => [...prevTodoList, newTask]);
    }
    setTask("");
    setDeadline("");
  };

  const deleteTask = (taskIdToDelete: number): void => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((task) => {
        return task.taskId !== taskIdToDelete;
      })
    );
  };

  // Template
  return (
    <DivMain>
      <DivHeader>
        <DivInputContainer>
          <InputTask
            name="task"
            type="text"
            placeholder="task to do ..."
            onChange={handleChange}
            value={task}
          />
          <InputDeadline
            name="deadline "
            type="number"
            placeholder={"days"}
            onChange={handleChange}
            value={deadline}
          />
        </DivInputContainer>
        <Button onClick={addTask}>Add</Button>
      </DivHeader>
      <DivTodoList>
        {todoList.map((task) => (
          <li key={task.taskId}>
            <TodoTask task={task} deleteTask={deleteTask} />
          </li>
        ))}
      </DivTodoList>
    </DivMain>
  );
};
