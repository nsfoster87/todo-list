import React, { useState } from 'react';
import TodoList from './TodoList.jsx';

export default function App() {
  const [items, setItems] = useState(["item1", "item2", "item3"]);

  return (
    <TodoList items={items} />
  );
}