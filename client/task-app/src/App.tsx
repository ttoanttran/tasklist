import { useState } from "react";
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList";
import ComponentA from "./components/ComponentA";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import './App.css'
import VerticalSplitter from "./components/VerticalSplitter";


const App = () => {
  // const [tasks, setTasks] = useState<string[]>([]);

  // const handleAdd = (item: string) => {
  //   setTasks(prevtasks => [...prevtasks, item]);
  // }

  // const handleDelete = (item: string) => {
  //   setTasks(tasks => tasks.filter(task => task !== item));
  // }

  return (
    <VerticalSplitter
      leftComponent={<div>Left Side</div>}
      rightComponent={<div>Right Side</div>}
    />
  );
}

export default App