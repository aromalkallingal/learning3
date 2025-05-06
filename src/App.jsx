
import { useRef } from 'react'


function App() {
const inputElement = useRef(null)

const focusInput = () => {
  inputElement.current.focus()
  inputElement.current.value = "Aromal"
};


  return <div>
    <input type="text" ref={inputElement} />
    <button onClick={() => focusInput()}>Focus and write</button>

  </div>
}

export default App
