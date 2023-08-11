import React from "react";
import "./GoalItem.css";

const GoalItem = ({ goal: { id, value }, onDeleteGoalItem }) => {
  const deleteHandler = () => {
    onDeleteGoalItem(id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {value}
    </li>
  );
};

export default GoalItem;
