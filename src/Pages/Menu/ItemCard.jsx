// Import Statements
import React from 'react';
import itemArr from '../../data/itemArr';

export default function ItemCard() {
  const itemList = itemArr.map((itemArr, index) => (
    <div className='item-card' key={index}>
      <div className='item-details'>
        <h3>{itemArr.name}</h3>
        <p>{itemArr.description}</p>
        <h3>{itemArr.price}</h3>
        <h4>{itemArr.tag}</h4>
      </div>
      <div className='item-price'></div>
      <div>
        <button className='add-to-cart'>Add to Cart</button>
      </div>
    </div>
  ));
  return <div className='menu-grid'>{itemList}</div>;
}
