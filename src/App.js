import React, { useState } from "react";
import GoalsList from "./components/Goals/GoalsList";
import NewGoal from "./components/NewGoal/NewGoal";

const App = () => {
  const [goals, setGoals] = useState([
    { value: "Do all exercises!", id: "g1" },
    { value: "Finish the course!", id: "g2" },
  ]);

  const addNewGoalHandler = (enteredGoal) => {
    setGoals((prevGoals) => {
      return [enteredGoal, ...prevGoals];
    });
  };

  const goalDeleteHandler = (id) => {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <div>
      <NewGoal onAddNewGoal={addNewGoalHandler} />
      <GoalsList goals={goals} onDeleteHandler={goalDeleteHandler} />
    </div>
  );
};

export default App;
