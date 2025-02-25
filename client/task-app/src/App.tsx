import { useState } from "react";
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList";
import ComponentA from "./components/ComponentA";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import './App.css'
import VerticalSplitter from "./components/VerticalSplitter";


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
      <h1 className="text-3xl font-bold underline">To Do List</h1>
      <TaskForm handleSubmit={handleAdd}></TaskForm>
      <TaskList things={tasks} handleDelete={handleDelete}></TaskList>
    </div>
  );
}

export default App