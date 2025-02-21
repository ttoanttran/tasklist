import { FormEvent, useState } from "react";

interface Props {
  handleSubmit: (item: string) => void
}

const TaskForm = ({ handleSubmit }: Props) => {
  
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSubmit(inputValue);
    setInputValue("");
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input 
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  )
}

export default TaskForm