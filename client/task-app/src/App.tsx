import { useState } from "react";
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAdd = (item: string) => {
    setTasks(tasks => [...tasks, item]);
  }

  const handleDelete = (item: string) => {
    setTasks(tasks => tasks.filter(task => task !== item));
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">To Do List</h1>
      <TaskForm handleSubmit={handleAdd}></TaskForm>
      <TaskList things={tasks} handleDelete={handleDelete}></TaskList>
    </div>
  )
}

export default App