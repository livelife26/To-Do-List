import React, { useState } from "react";

import { cn } from "../../../helpers/classname";

import "./style.scss";

const todolistClassName = cn("todolist");
const listItemClassName = cn("todolist-item");

export const TodoList = () => {
  const [todoList, setTodoList] = useState({
    items: [],
    itemId: 0,
  });

  const handleAdd = () => {
    setTodoList((todoList) => {
      const emptyItem = {
        id: todoList.itemId,
        value: "",
        isChecked: false,
      };

      return {
        items: [...todoList.items, emptyItem],
        itemId: todoList.itemId + 1,
      };
    });
  };

  return (
    <div className="app__layout">
      <div className={todolistClassName("layout")}>
        <div className={todolistClassName("title")}>
          <h1 className={todolistClassName("title-content")}>To do</h1>
        </div>
        <div className={todolistClassName("list")}>
          {todoList.items.map((listItem) => {
            const handleCheck = () => {
              setTodoList((todoList) => {
                const items = todoList.items.map((item) => {
                  if (item.id === listItem.id) {
                    return {
                      ...item,
                      isChecked: !item.isChecked,
                    };
                  }

                  return item;
                });

                return {
                  ...todoList,
                  items,
                };
              });
            };

            const handleEdit = (event) => {
              const { value } = event.target;

              setTodoList((todoList) => {
                const items = todoList.items.map((item) => {
                  if (item.id === listItem.id) {
                    return {
                      ...item,
                      value,
                    };
                  }

                  return item;
                });

                return {
                  ...todoList,
                  items,
                };
              });
            };

            const handleDelete = () => {
              setTodoList((todoList) => {
                const items = todoList.items.filter(
                  (item) => item.id !== listItem.id
                );

                return {
                  ...todoList,
                  items,
                };
              });
            };

            return (
              <div
                key={listItem.id}
                className={`${todolistClassName(
                  "item"
                )} ${listItemClassName()}`}
              >
                <label className={listItemClassName("label")}>
                  <input
                    className={listItemClassName("checkbox")}
                    type="checkbox"
                    checked={listItem.isChecked}
                    onChange={handleCheck}
                  />
                  <span className={listItemClassName("checkmark")}></span>
                </label>
                <input
                  placeholder="Type your new task!"
                  className={
                    listItem.isChecked && listItem.value
                      ? listItemClassName("form", { checked: true })
                      : listItemClassName("form")
                  }
                  type="text"
                  value={listItem.value}
                  onChange={handleEdit}
                />
                <button
                  className={listItemClassName("remove")}
                  onClick={handleDelete}
                ></button>
              </div>
            );
          })}
        </div>
        <div className={todolistClassName("add")}>
          <button
            className={todolistClassName("add-button")}
            onClick={handleAdd}
          >
            New task
          </button>
        </div>
      </div>
    </div>
  );
};
