import React, { useState } from 'react';
import Header from './Header.jsx';
import TodoList from './TodoList.jsx';

export default function App() {
  const [items, setItems] = useState(["item1", "item2", "item3"]);

  return (
    <div className="app">
      <Header />
      <TodoList items={items} />
    </div>
  );
}