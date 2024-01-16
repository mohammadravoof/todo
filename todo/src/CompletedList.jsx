// CompletedList.jsx
import React from 'react';
import { useTodoContext } from './TodoContext';

const CompletedList = () => {
  const { completed, handleTodoClick } = useTodoContext();

  return (
    <div>
      <h2>Completed List</h2>
      <ul>
        {completed.map((completedTodo) => (
          <li key={completedTodo.id} onClick={() => handleTodoClick(completedTodo)}>
            {completedTodo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedList;
