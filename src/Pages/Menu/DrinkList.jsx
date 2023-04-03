// Import Statements
import React from 'react';
import drinkArr from '../../data/drinkArr';

export default function DrinkList() {
  const itemList = drinkArr.map((drinkArr, index) => (
    <div className='item-card' key={index}>
      <div className='item-details'>
        <h3>{drinkArr.name}</h3>
        <p>{drinkArr.description}</p>
        <h3>{drinkArr.price}</h3>
        <h4>{drinkArr.tag}</h4>
      </div>
      <div className='item-price'></div>
      <div>
        <button className='add-to-cart'>Add to Cart</button>
      </div>
    </div>
  ));
  return <div className='menu-grid'>{itemList}</div>;
}
