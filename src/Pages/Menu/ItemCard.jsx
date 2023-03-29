// Import Statements
import React from 'react';
import itemArr from '../../data/itemArr';

export default function ItemCard() {
  const itemList = itemArr.map((itemArr) => (
    <div className='item-card'>
      <div className='item-details'>
        <h3>{itemArr.name}</h3>
        <p>{itemArr.description}</p>
        <h4>{itemArr.tag}</h4>
      </div>
    </div>
  ));
  return (
    <div className='item-card'>
      <div>{itemList}</div>
    </div>
  );
}
