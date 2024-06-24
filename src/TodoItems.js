import React, { useState } from "react";

export default function TodoItems({
  list,
  toggleDone,
  toggleDeleteButton,
  deleteItem,
}) {
  const [touchTime, setTouchTime] = useState(0);
  const [tapCount, setTapCount] = useState(0);

  const handleTouchStart = () => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - touchTime;
    setTouchTime(currentTime);

    if (tapLength < 300 && tapLength > 0) {
      setTapCount((prevCount) => prevCount + 1);
    } else {
      setTapCount(1);
    }

    setTimeout(() => {
      if (tapCount === 1) {
        toggleDone(list.id);
      } else if (tapCount === 2) {
        toggleDeleteButton(list.id);
      }
      setTapCount(0);
    }, 300);
  };

  return (
    <li
      style={{
        textDecoration: list.isCompleted ? "line-through" : "none",
        backgroundColor: list.showDelete ? "black" : "transparent",
        color: list.showDelete ? "white" : "black",
      }}
      onTouchStart={handleTouchStart}
      onClick={() => toggleDone(list.id)}
      onDoubleClick={() => toggleDeleteButton(list.id)}
    >
      {list.text}
      {list.showDelete && (
        <button
          style={{ backgroundColor: "red", color: "white", margin: "10px" }}
          onClick={(e) => {
            e.stopPropagation();
            deleteItem(list.id);
          }}
        >
          Delete
        </button>
      )}
    </li>
  );
}
