import React, { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  addTask: (name: string) => void;
}

export const InputForm = (props: Props) => {
  // hooks - states
  const [name, setName] = useState<string>("");
  // handlers
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.replace(" ", "") === "") return;
    props.addTask(name);
    setName("");
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
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
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
};
