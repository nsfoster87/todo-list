import React from 'react';
import Item from './Item.jsx';

export default function TodoList({items}) {
  return (
    <div className="todoList">
      <div className="todoListHeader">
        <h3>Todo List</h3>
      </div>
      {items.map((item, i) => <Item item={item} key={i} />)}
    </div>
  );
}