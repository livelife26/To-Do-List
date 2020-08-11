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
    <div>
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
          <div>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={onCheck}
            />
            <input type="text" value={value} onChange={onEdit} />
            <button onClick={onRemove}>remove</button>
          </div>
        );
      })}
      <button
        onClick={() => {
          addItem();
        }}
      >
        add
      </button>
    </div>
  );
};

