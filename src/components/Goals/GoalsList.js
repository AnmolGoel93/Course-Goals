import React from "react";
import "./GoalsList.css";
import GoalItem from "./GoalItem";

const GoalsList = ({ goals, onDeleteHandler }) => {
  const deleteGoalItemHandler = (goalId) => {
    onDeleteHandler(goalId);
  };

  if (goals.length === 0) {
    return (
      <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
    );
  }

  return (
    <ul className="goals-list">
      {goals.map((goal) => (
        <GoalItem
          key={goal.id}
          goal={goal}
          onDeleteGoalItem={deleteGoalItemHandler}
        />
      ))}
    </ul>
  );
};

export default GoalsList;
