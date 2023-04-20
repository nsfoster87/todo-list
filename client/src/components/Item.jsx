import React from 'react';

export default function Item({ item }) {
  return (
    <div className="item">
      {!item.complete && <input type="checkbox"></input>}
      <span className="itemText">{item.task}</span>
    </div>
  );
}