
import TaskItem from "./TaskItem";

interface Props {
  things: string[];
  handleDelete: (item: string) => void
}

const TaskList = ({ things, handleDelete }: Props) => {

  return (
    <div>
      <ol>
        {things.map((it, i) => 
         <li key={i}><TaskItem handleDelete={handleDelete}>{it}</TaskItem></li>
        )}
      </ol>
    </div>
  )
}

export default TaskList