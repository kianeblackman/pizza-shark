import React from 'react';
import ReviewCard from './ReviewCard.jsx';

export default function ReviewCarousel() {
  return (
    <div className='review-carousel'>
      <ReviewCard
        rating='🍕🍕🍕🍕'
        review='I had the pleasure of sinking my teeth into the Jawsome pizza at Pizza Shark and let me tell you, it was fin-tastic! The perfect combination of toppings and cheese. Highly recommend.'
        author='Bruce S'
      />
      <ReviewCard
        rating='🍕'
        review='Im sorry to say that I didnt have a great experience at PizzaShark. The crust was a bit too chewy for my liking and the service was lacking. Maybe I just had bad luck with my visit.'
        author='Debbie Downer'
      />
      <ReviewCard
        rating='🍕🍕🍕🍕'
        review='Pizza Shark is my go-to spot for a slice (or five) of pizza. The Sharknado pizza is my personal favorite - the perfect amount of heat and flavor. Cant recommend this place enough!'
        author='Mike R'
      />
      <ReviewCard
        rating='🍕🍕'
        review='The pizza at Pizza Shark was mediocre at best. Ive had better frozen pizza from the grocery store. Definitely not worth the price.'
        author='Karen K'
      />
      <ReviewCard
        rating='🍕🍕'
        review='The pizza at Pizza Shark was mediocre at best. Ive had better frozen pizza from the grocery store. Definitely not worth the price.'
        author='Karen K'
      />
      <ReviewCard
        rating='🍕🍕'
        review='The pizza at Pizza Shark was mediocre at best. Ive had better frozen pizza from the grocery store. Definitely not worth the price.'
        author='Karen K'
      />
    </div>
  );
}
