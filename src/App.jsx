
import { useRef } from 'react'


function App() {
const inputElement = useRef(null)
console.log(inputElement)

  return <div>
    <input type="text" ref={inputElement} />
  </div>
}

export default App
