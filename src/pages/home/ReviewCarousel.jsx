// Import Statments
import React from 'react';

// Import Components
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
        rating='🍕🍕🍕🍕🍕'
        review='Pizza Shark is hands down the best pizza joint in Brighton! Im a regular here and every time I come in, Im blown away by the quality of the food and the friendly atmosphere.'
        author='Jason B'
      />
      <ReviewCard
        rating='🍕🍕🍕🍕'
        review='Im sorry to say that my visit to Pizza Shark was not a pleasant one. The pizza was burnt and the toppings were sparse. And the prices were pretty steep for what you got. I wouldnt recommend this place.'
        author='Sarah L'
      />
      <ReviewCard
        rating='🍕🍕🍕🍕'
        review='As a vegetarian, Im always on the lookout for great pizza places with tasty veggie options, and Pizza Shark definitely delivers! Yum!'
        author='Rachel G'
      />
    </div>
  );
}
