import { useState } from "react"

const ColorPicker = () => {
  const [color, setColor] = useState("#FFFFFF")

  return (
    <div>
      <div style={{backgroundColor: color}}>
        <p>Color: {color}</p>
      </div>
      <input
        type="color" 
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  )
}

export default ColorPicker