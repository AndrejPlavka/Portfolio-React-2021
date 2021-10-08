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
  taskContent: string;
  completed: boolean;
  id: string;
  toggleTaskCompleted: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, newName: string) => void;
}

export const Todo = (props: Props) => {
  // hooks - states
  const [isEditing, setEditing] = useState(false);
  const [newTaskContent, setNewTaskContent] = useState("");

  // functions - handlers
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskContent(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.editTask(props.id, newTaskContent);
    setNewTaskContent("");
    setEditing(false);
  };

  // templates
  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.taskContent}
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newTaskContent}
          onChange={handleChange}
          autoFocus
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setEditing(false)}
        >
          Cancel
          <span className="visually-hidden">renaming {props.taskContent}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">
            new name for {props.taskContent}
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
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.taskContent}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={() => setEditing(true)}>
          Edit <span className="visually-hidden">{props.taskContent}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span className="visually-hidden">{props.taskContent}</span>
        </button>
      </div>
    </div>
  );
  return (
    <li className="todo stack-small">
      {isEditing ? editingTemplate : viewTemplate}
    </li>
  );
};
