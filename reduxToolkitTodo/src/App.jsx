import { useState } from 'react'


import AddTodo   from './components/AddTodo'
import Todo from './components/Todo'

function App() {
  

  return (
    <>
  <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50
                  flex flex-col items-center px-4 py-10">

    {/* Header */}
    <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center
                   tracking-tight animate-fadeIn">
      🚀 Learn Redux Toolkit
    </h1>

    {/* Todo Card */}
    <div className="w-full max-w-lg bg-white/80 backdrop-blur-md
                    rounded-3xl shadow-xl p-6
                    transition-all duration-300 hover:shadow-2xl">

      <AddTodo />

      <div className="mt-6">
        <Todo />
      </div>
    </div>

  </div>
</>

  )
}

export default App
