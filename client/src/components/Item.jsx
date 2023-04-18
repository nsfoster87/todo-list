import React from 'react';

export default function Item({ item }) {
  return (
    <div className="item">
      <input type="checkbox"></input>
      <span className="itemText">{item}</span>
    </div>
  );
}