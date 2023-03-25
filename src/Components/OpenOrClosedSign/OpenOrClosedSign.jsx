import React, { useState, useEffect } from 'react';

export default function OpenOrClosedSign() {
  const [isOpen, setIsOpen] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const openTime = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        10,
        0,
        0
      );
      const closeTime = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        22,
        0,
        0
      );

      if (currentDate >= openTime && currentDate < closeTime) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='open-or-closed-sign'>
      <h3>
        We're
        <br />
        {isOpen ? 'Open' : 'Closed'}
      </h3>
    </div>
  );
}
