import { useState } from "react";
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList";
import ColorPicker from "./components/ColorPicker";

const App = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAdd = (item: string) => {
    setTasks(prevtasks => [...prevtasks, item]);
  }

  const handleDelete = (item: string) => {
    setTasks(tasks => tasks.filter(task => task !== item));
  }

  return (
    <div>
      <ColorPicker></ColorPicker>
    </div>
  )
}

export default App