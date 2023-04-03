// Import Statements
import React from 'react';
import pizzaArr from '../../data/pizzaArr';

export default function PizzaList() {
  const itemList = pizzaArr.map((pizzaArr, index) => (
    <div className='item-card' key={index}>
      <div className='item-details'>
        <h3>{pizzaArr.name}</h3>
        <p>{pizzaArr.description}</p>
        <h3 className='item-price'>{pizzaArr.price}</h3>
        <h3 className='item-tag'>{pizzaArr.tag}</h3>
      </div>
      <div className='item-price'></div>
      <div>
        <button className='add-to-cart'>Add to Cart</button>
      </div>
    </div>
  ));
  return <div className='menu-grid'>{itemList}</div>;
}
