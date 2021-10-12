import { TaskType } from "../TodoApp";
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

//styles
import "../styles.css";

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
    <form className="stack-small" onSubmit={(e) => handleSubmitT(e, task.id)}>
      <div className="form-group">
        <label className="todo-label" htmlFor={task.id}>
          New name for {task.taskContent}
        </label>
        <input
          id={task.id}
          className="todo-text"
          type="text"
          value={newTaskContent}
          onChange={handleChangeT}
          autoFocus
          autoComplete="off"
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setEditing("")}
        >
          Cancel
          <span className="visually-hidden">renaming {task.taskContent}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">
            new name for {task.taskContent}
          </span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        {/* If we were to use checked, as we would in regular HTML, React would log some warnings into our browser console relating to handling events on the checkbox, which we want to avoid. */}
        {/* When used as an attribute of <label>, the for attribute has a value which is the id of the form element it relates to. => <label for="username">Your name</label>
                                                                                                                                    <input type="text" id="username"> */}
        <input
          id={task.id}
          type="checkbox"
          defaultChecked={task.completed}
          onChange={() => toggleTaskCompleted(task.id)}
        />
        <label className="todo-label" htmlFor={task.id}>
          {task.taskContent}
        </label>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn"
          onClick={() => setEditing(task.id)}
        >
          Edit <span className="visually-hidden">{task.taskContent}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => deleteTask(task.id)}
        >
          Delete <span className="visually-hidden">{task.taskContent}</span>
        </button>
      </div>
    </div>
  );
  return (
    <li className="todo stack-small">
      {isEditing === task.id ? editingTemplate : viewTemplate}
    </li>
  );
};
