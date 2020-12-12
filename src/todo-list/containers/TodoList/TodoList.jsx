import "./style.scss";
import React, { useState } from "react";

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
      <div className="todolist__layout">
        <div className="todolist__title">
          <h1 className="todolist__title-content">To do</h1>
        </div>
        <div className="todolist__list">
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
                })

                return {
                  ...todoList,
                  items,
                };
              });
            };

            const handleEdit = (event) => {
              const {value} = event.target;

              setTodoList((todoList) => {
                const items = todoList.items.map((item) => {
                  if (item.id === listItem.id) {
                    return {
                      ...item,
                      value,
                    };
                  }

                  return item;
                })

                return {
                  ...todoList,
                  items,
                };
              });
            };

            const handleDelete = () => {
              setTodoList((todoList) => {
                const items = todoList.items.filter((item) => item.id !== listItem.id);

                return {
                  ...todoList, 
                  items,
                }
              })
            };

            return (
              <div key={listItem.id} className="todolist__item todolist-item">
                <label className="todolist-item__label">
                  <input
                    className="todolist-item__checkbox"
                    type="checkbox"
                    checked={listItem.isChecked}
                    onChange={handleCheck}
                  />
                  <span className="todolist-item__checkmark"></span>
                </label>
                <input
                  placeholder="Type your new task!"
                  className="todolist-item__form"
                  type="text"
                  value={listItem.value}
                  onChange={handleEdit}
                />
                <button
                  className="todolist-item__remove"
                  onClick={handleDelete}
                ></button>
              </div>
            );
          })}
        </div>
        <div className="todolist__add">
          <button className="todolist__add-button" onClick={handleAdd}>
            New task
          </button>
        </div>
      </div>
    </div>
  );
};
