import React, { useEffect } from 'react'
import { useState, useRef } from 'react'

const RefPract = () => {
  const ref = useRef(0)

  useEffect(() => {
    console.log("rendered")
  })

  const handleClick = () => {
    ref.current = ref.current + 1
    console.log(ref.current)
  }

  return (
    <div>

      <h1>PRactice</h1>
      <button onClick={handleClick}>Button</button>

    </div>
  )
}

export default RefPract