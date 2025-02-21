import { ReactNode, useState, MouseEvent } from "react"

interface Props {
  children: ReactNode;
  handleDelete: (item: string) => void
}

const TaskItem = ({ children, handleDelete }: Props) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleDeleteButton = () => {
    if (typeof children === "string") {
      handleDelete(children); // Pass the children if it's a string
    }
  }


  return (
    <div>
      <input 
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <span className={isChecked ? "line-through" : ""}>
        {children}
      </span>
      <button onClick={handleDeleteButton} className="px-4 py-2 bg-red-400">Deletee</button>
    </div>
  )
}

export default TaskItem