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
      <form onSubmit={handleFormSubmit} className="flex gap-4 bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
        <input 
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg"
        />
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">Add</button>
      </form>
    </div>
  )
}

export default TaskForm