// TodoContext.js
import React, { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a Todo App' },
    { id: 3, text: 'Master Hooks' },
  ]);

  const [completed, setCompleted] = useState([]);

  const handleTodoClick = (todo) => {
    const isInTodos = todos.some((t) => t.id === todo.id);

    if (isInTodos) {
      const updatedTodos = todos.filter((t) => t.id !== todo.id);
      setCompleted([...completed, todo]);
      setTodos(updatedTodos);
    } else {
      const updatedCompleted = completed.filter((t) => t.id !== todo.id);
      setTodos([...todos, todo]);
      setCompleted(updatedCompleted);
    }
  };

  const contextValue = {
    todos,
    completed,
    handleTodoClick,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};
