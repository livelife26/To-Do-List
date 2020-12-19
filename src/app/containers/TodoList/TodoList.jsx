import React, { useState } from "react";

import { Checkbox } from '../../components/Checkbox';

import { cn } from "../../helpers/classname";

import "./TodoList.scss";

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
        isChecked: false,
        value: "",
      };

      return {
        items: [...todoList.items, emptyItem],
        itemId: todoList.itemId + 1,
      };
    });
  };

  return (
    <div className={todolistClassName("layout")}>
      <h1 className={todolistClassName("title-layout")}>To do</h1>
      <div className={todolistClassName("list-layout")}>
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
              <div key={listItem.id} className={listItemClassName("layout")}>
                <Checkbox checked={listItem.isChecked} onChange={handleCheck} />
                <input
                  placeholder="Type your new task!"
                  className={listItemClassName("textfield", {
                    checked: listItem.isChecked,
                  })}
                  type="text"
                  value={listItem.value}
                  onChange={handleEdit}
                />
                <button
                  className={listItemClassName("delete")}
                  onClick={handleDelete}
                ></button>
              </div>
            );
          })}
        </div>
        <div className={todolistClassName("add-button-layout")}>
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
