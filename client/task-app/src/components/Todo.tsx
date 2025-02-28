import React, { FormEvent, useState } from 'react'

const Todo = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState("");

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    if (task.length === 0)  {
      return;
    }
    setTasks([...tasks, task]);
    setTask("");
  }

  const handleDelete = (i: number) => {
    setTasks(tasks.filter((_, index) => index !== i));
  }

  return (
    <div>
      <h1>Todo list</h1>
      <form action="" onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <div>
        <ul>
          {tasks.map((task, index) => <li key={index}>{task} <button onClick={() => handleDelete(index)}>X</button></li>)}
        </ul>
      </div>
    </div>
  )
}

export default Todo