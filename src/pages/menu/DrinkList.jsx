// Import Statements
import React from 'react';
import drinkArr from '../../data/drinkArr';

export default function DrinkList() {
  const itemList = drinkArr.map((drinkArr, index) => (
    <div className='item-card' key={index}>
      <div className='item-details'>
        <div className='item-main-container'>
          <div className='item-main-details'>
            <h3 className='item-tag'>{drinkArr.type}</h3>
            <h3 className='item-name'>{drinkArr.name}</h3>
            <p className='item-description'>{drinkArr.description}</p>
          </div>
        </div>
        <div className='item-sub-details'>
          <h3 className='item-price'>{drinkArr.price}</h3>
        </div>
      </div>
      <div>
        <button className='add-to-cart'>Add to Cart</button>
      </div>
    </div>
  ));
  return <div className='menu-grid'>{itemList}</div>;
}
