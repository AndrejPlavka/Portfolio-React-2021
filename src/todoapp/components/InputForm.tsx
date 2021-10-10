import React, { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  // addTask: (taskContent: string) => void;
  handleSubmitIF: (e: FormEvent<HTMLFormElement>) => void;
  handleChangeIF: (e: ChangeEvent<HTMLInputElement>) => void;
  taskContent: string;
  error: string;
}

export const InputForm = (props: Props) => {
  const { handleSubmitIF, handleChangeIF, error, taskContent } = props;
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
    <form onSubmit={handleSubmitIF}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        autoComplete="off"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        value={taskContent}
        onChange={handleChangeIF}
        placeholder={error}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
};
