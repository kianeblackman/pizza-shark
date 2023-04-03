// Import Statements
import React from 'react';
import dessertArr from '../../data/dessertArr';

export default function DessertList() {
  const itemList = dessertArr.map((dessertArr, index) => (
    <div className='item-card' key={index}>
      <div className='item-details'>
        <h3>{dessertArr.name}</h3>
        <p>{dessertArr.description}</p>
        <h3>{dessertArr.price}</h3>
        <h4>{dessertArr.tag}</h4>
      </div>
      <div className='item-price'></div>
      <div>
        <button className='add-to-cart'>Add to Cart</button>
      </div>
    </div>
  ));
  return <div className='menu-grid'>{itemList}</div>;
}
