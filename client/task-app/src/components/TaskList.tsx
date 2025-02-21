import { useState } from "react";
import TaskItem from "./TaskItem";

interface Props {
  things: string[];
  handleDelete: (item: string) => void
}

const TaskList = ({ things, handleDelete }: Props) => {

  return (
    <div>
      <ol>
        {things.map((item, index) => 
         <li key={index}><TaskItem handleDelete={handleDelete}>{item}</TaskItem></li>
        )}
      </ol>
    </div>
  )
}

export default TaskList