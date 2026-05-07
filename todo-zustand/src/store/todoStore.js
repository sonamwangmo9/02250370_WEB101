import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useTodoStore = create(
  persist(
    (set) => ({
      // State - the actual data we're storing
      todos: [],

      // Actions - functions that change the data

      // Adds a brand new todo to the list
      addTodo: (text) => set((state) => ({
        todos: [...state.todos, { id: Date.now(), text, completed: false }]
      })),

      // Flips a todo between done ✅ and not done
      toggleTodo: (id) => set((state) => ({
        todos: state.todos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      })),

      // Removes one todo by its id
      removeTodo: (id) => set((state) => ({
        todos: state.todos.filter(todo => todo.id !== id)
      })),

      // Removes ALL completed todos at once
      clearCompleted: () => set((state) => ({
        todos: state.todos.filter(todo => !todo.completed)
      }))
    }),
    {
      name: 'todo-storage', // saves to localStorage under this name
    }
  )
)

export default useTodoStore