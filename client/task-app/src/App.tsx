import { useState } from "react";
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList";
import ComponentA from "./components/ComponentA";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import './App.css'


const App = () => {
  // const [tasks, setTasks] = useState<string[]>([]);

  // const handleAdd = (item: string) => {
  //   setTasks(prevtasks => [...prevtasks, item]);
  // }

  // const handleDelete = (item: string) => {
  //   setTasks(tasks => tasks.filter(task => task !== item));
  // }

  return (
    <div className="con">
      <Box1></Box1> 
      <Box2></Box2> 
    </div>
  )
}

export default App