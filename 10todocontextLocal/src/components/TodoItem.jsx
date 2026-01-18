import React, { useState } from "react"
import { motion } from "framer-motion"
import { useTodo } from "../contexts/TodoContext"

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)

  const { updateTodo, deleteTodo, toggleComplete } = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg })
    setIsTodoEditable(false)
  }

  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.35 }}
      className="relative overflow-hidden rounded-xl border shadow-lg"
      style={{
        backgroundImage: todo.completed
          ? "url('https://images.pexels.com/photos/7130499/pexels-photo-7130499.jpeg?auto=compress&cs=tinysrgb&w=800')"
          : "url('https://images.pexels.com/photos/7130555/pexels-photo-7130555.jpeg?auto=compress&cs=tinysrgb&w=800')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔥 Dark overlay for readability */}
      <div
        className={`absolute inset-0 ${
          todo.completed
            ? "bg-black/60"
            : "bg-black/50"
        } backdrop-blur-sm`}
      />

      {/* ✅ CONTENT (above overlay) */}
      <div className="relative z-10 flex items-center gap-x-3 px-4 py-2 text-white">
        
        {/* Checkbox */}
        <motion.input
          whileTap={{ scale: 0.85 }}
          type="checkbox"
          checked={todo.completed}
          onChange={toggleCompleted}
          className="cursor-pointer accent-green-400 w-4 h-4"
        />

        {/* Text */}
        <input
          type="text"
          value={todoMsg}
          readOnly={!isTodoEditable}
          onChange={(e) => setTodoMsg(e.target.value)}
          className={`w-full bg-transparent outline-none font-medium
            ${todo.completed ? "line-through text-gray-300" : "text-white"}
            ${
              isTodoEditable
                ? "border border-white/40 rounded-md px-2 py-1 bg-white/10"
                : ""
            }`}
        />

        {/* Edit Button */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          disabled={todo.completed}
          onClick={() => {
            if (todo.completed) return
            if (isTodoEditable) editTodo()
            else setIsTodoEditable((prev) => !prev)
          }}
          className="w-9 h-9 rounded-lg bg-white/20 hover:bg-white/30
                     border border-white/30 disabled:opacity-40"
        >
          {isTodoEditable ? "💾" : "✏️"}
        </motion.button>

        {/* Delete Button */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => deleteTodo(todo.id)}
          className="w-9 h-9 rounded-lg bg-red-500/70 hover:bg-red-600
                     border border-red-300"
        >
          ❌
        </motion.button>

      </div>
    </motion.div>
  )
}

export default TodoItem
