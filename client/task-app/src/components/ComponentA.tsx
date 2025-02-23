import { useState } from "react"
import ComponentB from "./ComponentB"
import { createContext } from "react"

export const userContext = createContext<string | undefined>(undefined);

const ComponentA = () => {
  const [user, setUser] = useState("toan")

  return (
    <>
      <userContext.Provider value={user}>
        <div className="border p-5">
          <h1>ComponentA</h1>
          <p>{`Hi ${user}`}</p>
          <ComponentB></ComponentB>
        </div>
      </userContext.Provider>
    </>
  )
}

export default ComponentA