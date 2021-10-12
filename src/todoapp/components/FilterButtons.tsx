import React, { Dispatch, useState } from "react";
interface Props {
  filterCategory: string;
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
        onClick={() => props.setFilter(props.filterCategory)}
      >
        <span className="visually-hidden">Show </span>
        <span>{props.filterCategory}</span>
        <span className="visually-hidden"> tasks</span>
      </button>
    </div>
  );
};
