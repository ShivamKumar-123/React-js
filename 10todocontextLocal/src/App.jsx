import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

import "./App.css"
import { Todoprovider } from "./contexts/TodoContext"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((preTodo) => [{ id: Date.now(), ...todo }, ...preTodo])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    )
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <Todoprovider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      {/* 🌄 Background Image */}
      <div
        className="min-h-screen py-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/7130536/pexels-photo-7130536.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        {/* Dark overlay */}
        <div className="min-h-screen bg-black/60 backdrop-blur-sm py-10">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-2xl mx-auto rounded-2xl px-6 py-6
                       bg-white/10 backdrop-blur-xl text-white
                       shadow-2xl border border-white/20"
          >
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-extrabold text-center mb-8
                         bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400
                         bg-clip-text text-transparent"
            >
              Manage Your Todos
            </motion.h1>

            <div className="mb-6">
              <TodoForm />
            </div>

            <AnimatePresence>
              <div className="flex flex-wrap gap-y-4">
                {todos.map((todo) => (
                  <motion.div
                    key={todo.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.35 }}
                    whileHover={{ scale: 1.02 }}
                    className="w-full"
                  >
                    <TodoItem todo={todo} />
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>

          </motion.div>
        </div>
      </div>
    </Todoprovider>
  )
}

export default App
