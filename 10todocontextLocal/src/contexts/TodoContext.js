import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:" Todo msg",
            completed: false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id, todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}  // yha par function define kiye jaate unki funtionality nhi
})


export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider