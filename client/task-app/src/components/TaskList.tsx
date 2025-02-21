import TaskItem from "./TaskItem";

interface Props {
  things: string[];
}

const TaskList = ({ things }: Props) => {
  return (
    <div>
      <ol>
        {things.map((item, index) => 
         <li key={index}><TaskItem>{item}</TaskItem></li>
        )}
      </ol>
    </div>
  )
}

export default TaskList