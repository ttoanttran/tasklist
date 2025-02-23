import React from 'react'
import { userContext } from './ComponentA'
import { useContext } from 'react'

const ComponentC = () => {

  const user = useContext(userContext)

  return (
    <div className="border p-5">
      <h1>ComponentA</h1>
      <p>{`Hi ${user}`}</p>
    </div>
  )
}

export default ComponentC