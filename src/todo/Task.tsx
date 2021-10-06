import { MdCheck, MdClear, MdDelete, MdEdit } from "react-icons/md";
import { TaskProps, TaskType } from "./TaskManager";
import { VscCheck, VscEdit, VscTrash } from "react-icons/vsc";
import styled from "styled-components/macro";

const DivStyledTask = styled.div<{ completed: boolean }>`
  background: #9cc79c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4em;
  margin-top: 5px;
  /* padding: 5px 10px; */
  border: 1px solid #114068;
  border-radius: 10px;
  opacity: ${(props) => (props.completed ? 0.6 : 1)};

  p {
    text-decoration: ${(props) => (props.completed ? "line-through" : "")};
  }
`;

const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  & > svg {
    height: 2em;
  }
`;

const DivEdit = styled.div`
  background: gray;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 70%;
  /* margin-top: 5px; */
  /* padding: 5px 10px; */
  border: none;
  border-radius: 10px;
`;

// interface Props {}

// type TaskType = {
//   id: string;
//   context: string;
//   completed: boolean;
//   dateCreated: number;
//   dateEdited?: number;
// };

// type TaskProps = {
//   task: TaskType;
//   tasks: TaskType[];
//   addOrEditTask: (t: TaskType) => void;
//   deleteTask: (id: string) => void;
//   toggleTask: (id: string) => void;
// };
export const Task = (props: {
  task: TaskType;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  editTask: (id: string) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
}) => {
  const { task, setCategory, setContent, editTask, deleteTask, toggleTask } =
    props;

  return (
    <DivStyledTask completed={task.completed}>
      {task.editable ? (
        <div>
          <input
            type="text"
            autoFocus
            value={task.category}
            onChange={(e) => setCategory(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === "Escape") {
                editTask(task.id);
                e.preventDefault();
                e.stopPropagation();
              }
            }}
          />
          <input
            type="text"
            value={task.content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === "Escape") {
                editTask(task.id);
                e.preventDefault();
                e.stopPropagation();
              }
            }}
          />
        </div>
      ) : (
        <DivEdit
          //   onClick={() => {
          //     toggleTask(task.id);
          //   }}
          onDoubleClick={() => {
            editTask(task.id);
          }}
        >
          <p>{task.category}</p>
          <p>{task.content}</p>
        </DivEdit>
      )}
      <div>
        <Button
          onClick={() => {
            toggleTask(task.id);
          }}
        >
          <VscCheck />
        </Button>
        <Button
          onClick={() => {
            editTask(task.id);
          }}
        >
          <VscEdit />
        </Button>
        <Button
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          <VscTrash />
        </Button>
      </div>
    </DivStyledTask>
  );
};
