import { useState } from "react";

// Custom Components
import CustomForm from "./components/CustomForm";

function App() {
  const [count, setCount] = useState(0);

  const addTask = (task) => {
    console.log(task);
  };

  return (
    <div className="container">
      <header>
        <h1>My task list</h1>
      </header>
      <CustomForm addTask={addTask} />
    </div>
  );
}

export default App;
