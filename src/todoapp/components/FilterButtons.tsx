import React, { Dispatch, useState } from "react";

interface Props {
  name: string;
  isPressed: boolean;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterButtons = (props: Props) => {
  // template
  return (
    <div className="filters btn-group stack-exception">
      <button
        type="button"
        className="btn toggle-btn"
        aria-pressed={props.isPressed}
        onClick={() => props.setFilter(props.name)}
      >
        <span className="visually-hidden">Show </span>
        <span>{props.name}</span>
        <span className="visually-hidden"> tasks</span>
      </button>
    </div>
  );
};
