import React from 'react'
import ComponentC from './ComponentC'
import { useContext } from 'react'
import { UserContext } from './ComponentA'

const ComponentB = () => {
  const user = useContext(UserContext)

  return (
    <div className="border p-5">
      <h1>ComponentB</h1>
      <h2>{user}</h2>
      <ComponentC></ComponentC>
    </div>
  )
}

export default ComponentB