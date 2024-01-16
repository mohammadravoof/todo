// App.js
import React from 'react';
import TodoList from './TodoList';
import CompletedList from './CompletedList';
import { TodoProvider } from './TodoContext';

const App = () => {
  return (
    <TodoProvider>
      <div>
        <h1>React Todo App</h1>
        <TodoList />
        <CompletedList />
      </div>
    </TodoProvider>
  );
};

export default App;
