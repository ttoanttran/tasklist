import { useState } from "react";
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAdd = (item: string) => {
    setTasks(tasks => [...tasks, item]);
  }

  return (
    <div>
      <h1>To Do List</h1>
      <TaskForm handleSubmit={handleAdd}></TaskForm>
      <TaskList things={tasks}></TaskList>
    </div>
  )
}

export default App