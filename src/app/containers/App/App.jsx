import React from "react";

import { cn } from '../../helpers/classname';

import { TodoList } from "../TodoList";

import './App.scss';

const appClassName = cn('app');

export const App = () => {
  return (
    <div className={appClassName("layout")}>
      <TodoList />
    </div>
  );
};
