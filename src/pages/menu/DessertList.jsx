// Import Statements
import React from 'react';
import dessertArr from '../../data/dessertArr';

export default function DessertList() {
  const itemList = dessertArr.map((dessertArr, index) => (
    <div className='item-card' key={index}>
      <div className='item-details'>
        <div className='item-main-details'>
          <h3 className='item-name'>{dessertArr.name}</h3>
          <h3 className='item-tag'>{dessertArr.type}</h3>
          <p className='item-description'>{dessertArr.description}</p>
        </div>
        <div className='item-sub-details'>
          <h3 className='item-price'>{dessertArr.price}</h3>
        </div>
      </div>
      <div>
        <button className='add-to-cart'>Add to Cart</button>
      </div>
    </div>
  ));
  return <div className='menu-grid'>{itemList}</div>;
}
