import React, { useState } from "react";
import styles from "./NewGoal.module.css";

const NewGoal = ({ onAddNewGoal }) => {
  const [newGoalValue, setNewGoalValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    if (newGoalValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    onAddNewGoal({
      id: Math.random().toString(),
      value: newGoalValue,
    });

    setNewGoalValue("");
  };

  const newGoalChangeHandler = (event) => {
    const goalValue = event.target.value;
    if (goalValue.trim().length > 0) {
      setIsValid(true);
    }

    setNewGoalValue(goalValue);
  };

  return (
    <div className={styles["new-goal__wrapper"]}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles["new-goal_controls"]} ${
            !isValid && styles.invalid
          }`}
        >
          <label htmlFor="newGoal">Course Goal</label>
          <input
            value={newGoalValue}
            type="text"
            id="newGoal"
            name="newGoal"
            onChange={newGoalChangeHandler}
          />
        </div>
        <button className={styles["add-goal__button"]} type="submit">
          Add Goal
        </button>
      </form>
    </div>
  );
};

export default NewGoal;
