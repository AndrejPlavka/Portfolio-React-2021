import React, { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  // addTask: (taskContent: string) => void;
  handleSubmitIF: (e: FormEvent<HTMLFormElement>) => void;
  handleChangeIF: (e: ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e) => void;
  taskContent: string;
  error: string;
  contentInputFormRef: any;
  // taskInputRefContent: React.MutableRefObject<null>;
}

export const InputForm = (props: Props) => {
  const {
    handleSubmitIF,
    handleChangeIF,
    handleKeyDown,
    error,
    taskContent,
    contentInputFormRef,
  } = props;
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
    <form onSubmit={handleSubmitIF} onKeyDown={handleKeyDown}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        autoComplete="off"
        placeholder={error}
        id="new-todo-input"
        className="input input__lg"
        name="text"
        value={taskContent}
        onChange={handleChangeIF}
        ref={contentInputFormRef}
        // ref={taskInputRefContent}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
};
