
import React, { useState } from "react"

function App() {

  const [click, setClick] = useState(0)

  const buttonClick = () => {
    setClick(click + 1)
   
  }
  return (
  <div>
 <h1>{click}</h1>
 <button onClick={buttonClick}>+</button>

  </div>
  )
}

export default App
