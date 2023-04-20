import React, { useState } from 'react';
import Header from './Header.jsx';
import TodoList from './TodoList.jsx';
import AddItem from './AddItem.jsx';
import data from '../../../exampleData/items.json';

export default function App() {
  const [items, setItems] = useState(data);

  return (
    <div className="app">
      <Header />
      <TodoList items={items} />
      <AddItem />
    </div>
  );
}