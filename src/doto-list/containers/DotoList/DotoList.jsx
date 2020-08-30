import "./style.scss";
import React, { useState } from "react";

export const DotoList = () => {
  const [dotoList, setDotoList] = useState([]);

  const addItem = () => {
    const emptyItem = {
      value: "",
      isChecked: false,
    };

    setDotoList([...dotoList, emptyItem]);
  };

  return (
    <div className="app__layout">
      <div className="todolist__layout">
        <div className="todolist__title">
          <h1 className="todolist__title-content">To do</h1>
        </div>
        <div className="todolist__list">
          {dotoList.map((listItem, index) => {
            const { value, isChecked } = listItem;
            const updatedList = dotoList.slice();

            const onCheck = () => {
              updatedList[index] = { ...listItem, isChecked: !isChecked };

              setDotoList(updatedList);
            };

            const onEdit = (event) => {
              updatedList[index] = { ...listItem, value: event.target.value };

              setDotoList(updatedList);
            };

            const onRemove = () => {
              updatedList.splice(index, 1);

              setDotoList(updatedList);
            };

            return (
              <div className="todolist__item todolist-item">
                <label className="todolist-item__label">
                  <input
                    className="todolist-item__checkbox"
                    type="checkbox"
                    checked={isChecked}
                    onChange={onCheck}
                  />
                  <span className="todolist-item__checkmark"></span>
                </label>
                <input
                  placeholder="Type your new task!"
                  className="todolist-item__form"
                  type="text"
                  value={value}
                  onChange={onEdit}
                />
                <button className="todolist-item__remove" onClick={onRemove}></button>
              </div>
            );
          })}
        </div>
        <div className="todolist__add">
          <button
            className="todolist__add-button"
            onClick={() => {
              addItem();
            }}
          >
            New task
          </button>
        </div>
      </div>
    </div>
  );
};
