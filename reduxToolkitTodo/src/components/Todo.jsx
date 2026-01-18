import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todo() {
  const todos = useSelector((state) => state.todos) || []
  const dispatch = useDispatch()

  return (
    <div className="max-w-md mx-auto mt-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        📝 Todos
      </h2>

      {todos.length === 0 ? (
        <p className="text-center text-gray-500 italic">
          No todos yet. Add one above 👆
        </p>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between
                         bg-white/80 backdrop-blur-md
                         px-4 py-3 rounded-xl shadow-md
                         transition-all duration-300
                         hover:shadow-lg hover:scale-[1.02]"
            >
              <span className="text-gray-700 font-medium">
                {todo.text}
              </span>

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="w-8 h-8 flex items-center justify-center
                           rounded-full text-white
                           bg-gradient-to-r from-red-500 to-pink-500
                           hover:from-red-600 hover:to-pink-600
                           active:scale-90
                           transition-all duration-300"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Todo
