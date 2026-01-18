

import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  
  const [length,setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass);

  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])



  return (

    <>
    <div className="w-full max-w-md mx-auto my-12 p-6 
                bg-gray-900/70 backdrop-blur-xl 
                rounded-3xl shadow-2xl border border-gray-700/40
                transition-all duration-500 hover:shadow-orange-500/20">

  {/* Title */}
  <h1 className="text-3xl font-bold text-center text-orange-400 mb-10 tracking-wide 
                animate-pulse">
    🔐 Password Generator
  </h1>

  {/* Password Box */}
  <div className="flex items-center gap-3 bg-gray-800/70 border border-gray-700 
                  rounded-xl shadow-inner px-4 py-3 mb-8
                  hover:border-orange-400/40 transition-all duration-300">

    <input
      type="text"
      value={password}
      readOnly
      placeholder="Your Password Appears Here..."
      className="w-full px-2 py-2 bg-transparent text-orange-300 
                placeholder-gray-500 outline-none tracking-wider
                text-lg select-none"
      ref={passwordRef}
    />

    {/* Copy Button */}
    <button 
      onClick={copyPasswordToClipboard}
      className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white 
                rounded-lg transition-all duration-150 active:scale-95 shadow-md
                hover:shadow-orange-400/40"
    >
      Copy
    </button>

  </div>

  {/* Controls Section */}
  <div className="space-y-6">

    {/* Range Label */}
    <div className="flex items-center justify-between">
      <label className="text-orange-300 font-medium text-xl">
        Length: 
        <span className="text-white ml-2 font-semibold animate-fade-in">
          {length}
        </span>
      </label>
    </div>

    {/* Range Slider */}
    <input 
      type="range"  
      min={6} 
      max={100} 
      value={length}
      onChange={(e)=> setLength(e.target.value)}
      
      className="w-full cursor-pointer accent-orange-500 
                h-2 bg-gray-700 rounded-lg appearance-none
                transition-all duration-300 ease-out

                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:h-5 
                [&::-webkit-slider-thumb]:w-5
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-orange-500
                [&::-webkit-slider-thumb]:shadow-lg
                [&::-webkit-slider-thumb]:transition-all
                [&::-webkit-slider-thumb]:duration-300
                [&::-webkit-slider-thumb]:hover:scale-125"
    />
  </div>

  {/* Checkboxes */}
  <div className="space-y-4 mt-8">

    {/* Numbers */}
    <label className="flex items-center gap-3 cursor-pointer group">
      <input 
        type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={() => setNumberAllowed(prev => !prev)}
        
        className="w-5 h-5 accent-orange-500 cursor-pointer
                  transition-all duration-200 group-hover:scale-110"
      />
      <span className="text-white group-hover:text-orange-300 transition-all duration-200">
        Include Numbers
      </span>
    </label>

    {/* Characters */}
    <label className="flex items-center gap-3 cursor-pointer group">
      <input 
        type="checkbox"
        defaultChecked={charAllowed}
        id="charInput"
        onChange={() => setCharAllowed(prev => !prev)}
        
        className="w-5 h-5 accent-orange-500 cursor-pointer
                  transition-all duration-200 group-hover:scale-110"
      />
      <span className="text-white group-hover:text-orange-300 transition-all duration-200">
        Include Special Characters
      </span>
    </label>

  </div>

</div>

    </>
  )
}

export default App
