import { useState } from "react";

// Custom Components imports
import CustomForm from "./components/CustomForm";
import EditForm from "./components/EditForm";
import useLocalStorage from "./components/hooks/useLocalStorage";
import TaskList from "./components/TaskList";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  // const [tasks, setTasks] = useState([]);
  const [tasks, setTasks] = useLocalStorage("react-todo.tasks", []);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);

  // Adding Task
  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  // Deleting task
  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
  };

  // Toggling task status
  const toggleTask = (id) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  // Updating Task
  const updateTask = (task) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === task.id ? { ...t, name: task.name } : t))
    );
    closeEditMode();
  };

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl.focus();
  };

  // Enter Edit Mode
  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  };

  return (
    <div className="container">
      <header>
        <h1>My task list</h1>
      </header>
      {isEditing && (
        <EditForm
          editedTask={editedTask}
          updateTask={updateTask}
          closeEditMode={closeEditMode}
        />
      )}
      <CustomForm addTask={addTask} updateTask={updateTask} />
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
      <ThemeSwitcher />
    </div>
  );
}

export default App;
