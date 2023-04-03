// Import Statements
import React from 'react';
import pizzaArr from '../../data/pizzaArr';

export default function PizzaList() {
  const itemList = pizzaArr.map((pizzaArr, index) => (
    <div className='item-card' key={index}>
      <div className='item-details'>
        <h3>{pizzaArr.name}</h3>
        <p>{pizzaArr.description}</p>
        <h3>{pizzaArr.price}</h3>
        <h4>{pizzaArr.tag}</h4>
      </div>
      <div className='item-price'></div>
      <div>
        <button className='add-to-cart'>Add to Cart</button>
      </div>
    </div>
  ));
  return <div className='menu-grid'>{itemList}</div>;
}
