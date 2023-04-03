import React from 'react';

// Import Components
import MenuFilter from './MenuFilter';
import PizzaList from './PizzaList';
import SideList from './SideList';
import DrinkList from './DrinkList';
import DessertList from './DessertList';

export default function Menu() {
  return (
    <div className='menu-page'>
      <section className='disclaimer-section'>
        <div className='disclaimer-content'>
          <h2>⚠️ Disclaimer ⚠️</h2>
          <p>
            No actual sharks were harmed in the making of our pizza. Any
            resemblance to a shark fin or any other part of a shark is purely
            coincidental and delicious. Please do not attempt to swim with our
            pizza, as it may cause severe cravings and hunger pains. We are not
            responsible for any attempts to catch or ride a pizza shark. Thank
            you for choosing Pizza Shark, where the pizza is always a bite above
            the rest!
          </p>
        </div>
      </section>
      <section className='menu-section'>
        <MenuFilter className='filter-container' />
      </section>
      <section className='menu-items-section'>
        <div>
          <h2 className='menu-item-heading'>Sides</h2>
          <SideList />
        </div>
        <div>
          <h2 className='menu-item-heading'>Pizzas</h2>
          <PizzaList />
        </div>
        <div>
          <h2 className='menu-item-heading'>Drinks</h2>
          <DrinkList />
        </div>
        <div>
          <h2 className='menu-item-heading'>Dessert</h2>
          <DessertList />
        </div>
      </section>
    </div>
  );
}
