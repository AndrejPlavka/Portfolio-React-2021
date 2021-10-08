import React, { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  addTask: (name: string) => void;
}

export const InputForm = (props: Props) => {
  // hooks - states
  const [taskContent, setTaskContent] = useState<string>("");
  // handlers
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskContent.replace(" ", "") === "") return;
    props.addTask(taskContent);
    setTaskContent("");
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskContent(e.target.value);
  };
  // template
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={taskContent}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
};
