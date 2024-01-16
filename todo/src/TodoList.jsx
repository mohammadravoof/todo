// TodoList.js
import React from 'react';
import { useTodoContext } from './TodoContext';

const TodoList = () => {
  const { todos, completed, handleTodoClick } = useTodoContext();

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => handleTodoClick(todo)}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
