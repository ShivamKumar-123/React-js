import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
  const [input, setInput] = React.useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()

    if (!input.trim()) return        // ✅ prevent empty todo

    dispatch(addTodo(input))
    setInput('')                     // ✅ clear input
  }

  return (
    <form
      onSubmit={addTodoHandler}
      className="flex items-center gap-3 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg max-w-md mx-auto
                 transition-all duration-300 hover:shadow-xl"
    >
      <input
        type="text"
        placeholder="✍️ Enter a todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 px-4 py-3 rounded-xl border border-gray-200
                   focus:outline-none focus:ring-2 focus:ring-indigo-500
                   focus:border-indigo-500
                   text-gray-700 placeholder-gray-400
                   transition-all duration-300"
      />

      <button
        type="submit"
        className="px-5 py-3 rounded-xl font-medium text-white
                   bg-gradient-to-r from-indigo-500 to-purple-500
                   hover:from-indigo-600 hover:to-purple-600
                   active:scale-95
                   transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Add
      </button>
    </form>
  )
}

export default AddTodo
