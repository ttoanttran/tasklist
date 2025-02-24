import { useState } from "react";
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList";
import ColorPicker from "./components/ColorPicker";
import MyComponent from "./components/MyComponent";
import ComponentA from "./components/ComponentA";
import StopWatch from "./components/StopWatch";

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
      <StopWatch></StopWatch>
    </div>
  )
}

export default App