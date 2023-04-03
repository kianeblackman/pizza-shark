//* Description: This component is used to display the reviews of the users

// Import Statments
import React from 'react';

export default function ReviewCard({ rating, review, author }) {
  return (
    <div className='review-card'>
      <span>{rating}</span>
      <p>{review}</p>
      <h3>- {author}</h3>
    </div>
  );
}
