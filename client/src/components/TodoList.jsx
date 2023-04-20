import React from 'react';
import Item from './Item.jsx';

export default function TodoList({items}) {
  return (
    <div className="todoList">
      {items.map((item, i) => <Item item={item} key={i} />)}
    </div>
  );
}