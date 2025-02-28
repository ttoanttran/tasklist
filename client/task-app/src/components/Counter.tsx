import { useState } from "react"

interface Props {
  label: string;
}

const Counter = ({label} : Props) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      <h2>Count : {count}</h2>
      <button onClick={() => {setCount((prevCount) => prevCount + 1);}}>{label}</button>
    </>

  )
}

export default Counter