import { ReactNode, useState } from "react"

interface Props {
  children: ReactNode
}

const TaskItem = ({ children }: Props) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div>
      <input 
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      {children}
      <button>Deletee</button>
    </div>
  )
}

export default TaskItem