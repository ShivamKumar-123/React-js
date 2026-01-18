import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=' bg-green-400 '>Tailwind Test</h1>
      <Card username = 'Shivam Kumar' btnText = 'Save'/>
      <Card username = 'Akanksha' btnText = 'Add'/>

    </>
  )
}

export default App
