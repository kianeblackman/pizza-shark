import React from 'react';
import OrderHereButton from '../../Components/Buttons/OrderHereButton';

export default function Home() {
  return (
    <div className='home-page'>
      <section className='highlight-section'>
        <div className='highlight-content'>
          <h1>
            You're gonna need a<br />
            bigger belt.
          </h1>
          <OrderHereButton />
        </div>
      </section>
    </div>
  );
}
