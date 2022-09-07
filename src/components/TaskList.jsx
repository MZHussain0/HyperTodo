import React from "react";

// component Imports
import TaskItem from "./TaskItem";

// Stylesheet imports
import styles from "./TaskList.module.css";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul className={styles.tasks}>
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
        ))}
    </ul>
  );
};

export default TaskList;
