import { useState } from "react";

// Custom Components
import CustomForm from "./components/CustomForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  // Adding Task
  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  // Deleting task
  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
  };

  return (
    <div className="container">
      <header>
        <h1>My task list</h1>
      </header>
      <CustomForm addTask={addTask} />
      {tasks && <TaskList tasks={tasks} deleteTask={deleteTask} />}
    </div>
  );
}

export default App;
