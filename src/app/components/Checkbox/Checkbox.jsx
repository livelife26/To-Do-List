import React from "react";

import { cn } from "../../helpers/classname";

import "./Checkbox.scss";

const checkboxClassName = cn("checkbox");

export const Checkbox = (props) => {
  return (
    <label className={checkboxClassName("label")}>
      <input
        className={checkboxClassName("box")}
        type="checkbox"
        {...props}
      />
      <span className={checkboxClassName("mark")}></span>
    </label>
  );
};
