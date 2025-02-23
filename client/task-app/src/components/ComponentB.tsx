import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = () => {
  return (
    <div className="border p-5">
      <h1>ComponentB</h1>
      <ComponentC></ComponentC>
    </div>
  )
}

export default ComponentB