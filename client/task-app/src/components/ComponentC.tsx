import React from 'react'
import { useContext } from 'react'
import { UserContext } from './ComponentA'

const ComponentC = () => {
  const user = useContext(UserContext)

  return (
    <div className="border p-5">
      <h1>ComponentA</h1>
      <p>{`Hi`}</p>
      <h2>{user}</h2>
    </div>
  )
}

export default ComponentC