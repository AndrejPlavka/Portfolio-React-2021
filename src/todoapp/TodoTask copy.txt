import { theme } from "./theme";
import React from "react";
import styled from "styled-components";

//Styled-components
export const DivTask = styled.div`
  display: flex;
  color: ${theme.white};
`;

export const DivContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpanTaskContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25rem;
  height: 3rem;
  font-size: 1.3rem;
  font-weight: bold;
  border: none;
  background: linear-gradient(to right, #05d1ec, #14baec);
  border-radius: 8px;
  opacity: 0.9;
`;

export const SpanTaskDeadline = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 3rem;
  font-size: 1.3rem;
  font-weight: bold;
  border: none;
  background: linear-gradient(to right, #14baec, #3a4f88);
  border-radius: 8px;
  opacity: 0.9;
  margin-left: 4px;
  margin-right: 4px;
`;

export const Button = styled.button`
  width: 8rem;
  height: 3rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  color: ${theme.blackish};
  background-color: ${theme.greenish};
`;

export const ButtonDelete = styled(Button)`
  font-weight: 800;
  background: linear-gradient(to left, #cc2b5e, #3a4f88);
  color: ${theme.white};
`;
// Props
interface ITask {
  taskName: string;
  taskDeadline: number | string;
  taskId: number;
}
interface Props {
  task: ITask;
  deleteTask: (taskIdToDelete: number) => void;
}

// Components - hooks - child
export const TodoTask = ({ task, deleteTask }: Props) => {
  // Template
  return (
    <DivTask>
      <DivContent>
        <SpanTaskContent>{task.taskName}</SpanTaskContent>
        <SpanTaskDeadline>{task.taskDeadline}</SpanTaskDeadline>
      </DivContent>
      <ButtonDelete
        onClick={() => {
          deleteTask(task.taskId);
        }}
      >
        X
      </ButtonDelete>
    </DivTask>
  );
};
