import { useState } from 'react'

import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  
  const addValue = ()=>{
    setCounter(prevCounter => prevCounter + 1) // preCounter is the previous value of the counter
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1) // 19 of the counter value
  }

  const removeValue = ()=>{
    counter--;
    setCounter(counter);
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button 
        onClick={addValue}
      >Add value</button>
      <br />
      <br />
      <button 
        onClick={removeValue}
      >remove value</button>
    </>
  )
}

export default App
