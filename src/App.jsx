
import React, { useState } from "react"

function App() {

  const data = {
    Kerala: "Thiruvananthapuram",
    Karnataka: "Bangalore",
    TamilNadu: "Chennai",
  };

  const [sS, setsS] = useState("Kerala")
  const [sC, setsC] = useState("Thiruvanathapuram")
  const changeState = (e) => {
    setsS(e.target.value)
    setsC(data[e.target.value])
  }



  return (
    <div>
      <select onChange={changeState}>
      <option value="Kerala">Kerala</option>
      <option value="Karnataka">Karnataka</option>
      <option value="TamilNadu">TamilNaduu</option>
      </select>
      <p>Selected state is: {sS}</p>
      <p>Capital of selected state: {sC}</p>
    </div>
  )
}


export default App
