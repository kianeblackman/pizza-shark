import React from 'react';

// Import Components
import MenuFilter from './MenuFilter';

export default function Menu() {
  return (
    <div className='menu-page'>
      <section className='disclaimer-section'>
        <div className='disclaimer-content'>
          <h2>Disclaimer</h2>
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
        <MenuFilter />
      </section>
    </div>
  );
}
