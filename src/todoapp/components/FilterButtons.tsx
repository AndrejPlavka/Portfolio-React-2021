import React, { Dispatch, useState } from "react";
interface Props {
  filterCategory: string;
  isPressed: boolean;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterButtons = (props: Props) => {
  // template
  return (
    <button
      type="button"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.filterCategory)}
    >
      <span>{props.filterCategory}</span>
    </button>
  );
};
