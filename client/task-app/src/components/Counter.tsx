import { useState } from "react"


const Counter = () => {
  const [count, setCount] = useState(0)

  const handleAdd = () => {
    setCount(count + 1)
  }

  const handleMinus = () => {
    setCount(count - 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div>
      <h1>Counter</h1>
      {count}
      <div>
        <button onClick={handleAdd}>Increment</button>
        <button onClick={handleMinus}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>

    </div>
  )
}

export default Counter