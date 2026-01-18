import React, { useState } from "react"
import { motion } from "framer-motion"
import { useTodo } from "../contexts/TodoContext"

function TodoForm() {
  const [todo, setTodo] = useState("")
  const { addTodo } = useTodo()

  const add = (e) => {
    e.preventDefault()
    if (!todo) return
    addTodo({ todo, completed: false })
    setTodo("")
  }

  return (
    <motion.form
      onSubmit={add}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden rounded-xl shadow-lg"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/7130536/pexels-photo-7130536.jpeg?auto=compress&cs=tinysrgb&w=800')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔥 Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* CONTENT */}
      <div className="relative z-10 flex">
        <input
          type="text"
          placeholder="✍️ Write your todo..."
          className="w-full px-4 py-2 outline-none bg-transparent
                     text-white placeholder-gray-300
                     border border-white/30 rounded-l-xl
                     focus:border-white/70 transition"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="px-5 py-2 rounded-r-xl
                     bg-gradient-to-r from-green-500 to-emerald-600
                     text-white font-semibold shadow-md
                     hover:from-green-600 hover:to-emerald-700"
        >
          ➕ Add
        </motion.button>
      </div>
    </motion.form>
  )
}

export default TodoForm
