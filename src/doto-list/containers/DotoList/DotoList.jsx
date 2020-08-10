import React, { useState } from "react";

export const DotoList = () => {
  const [counterValue, setCounterValue] = useState(0);

  return (
    <div>
      {counterValue}
      <button
        onClick={() => {
          setCounterValue(counterValue + 1);
        }}
      >
        count
      </button>
    </div>
  );
};
