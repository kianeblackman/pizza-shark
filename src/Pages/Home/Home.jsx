import React from 'react';
import OrderHereButton from '../../Components/Buttons/OrderHereButton';
import image from '../../Assets/images/our-story.jpg';
import logo from '../../Assets/svg/pizza-shark-logo.svg';

import './ReviewCard.jsx';
import ReviewCard from './ReviewCard.jsx';
import ReviewCarousel from './ReviewCarousel';

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
      <section className='our-story-section'>
        <div className='our-story-content'>
          <h2>Our Story</h2>
          <div className='our-story-body'>
            <div className=''>
              <p>
                Welcome to Pizza Shark, where the love for pizza and sharks
                collide! We're Max, Sam, and Lucy, and we're the proud owners of
                this little pizzeria that could.
              </p>
              <p>
                It all started with a crazy idea - what if we combined our love
                for pizza with our fascination for sharks? We know, it sounds a
                bit odd, but stick with us. We found this rundown old building
                in Brighton that used to be a fish and chip shop and it had a
                funny shaped roof that looked like a shark's fin. That's when
                the lightbulb went off - we knew it was meant to be!
              </p>
              <p>
                We spent months renovating the building and turning it into a
                funky pizzeria with a quirky, shark-themed decor. We even got a
                custom-built pizza oven in the shape of a shark's head. It was a
                labor of love, but it was all worth it when we opened our doors
                to the public.
              </p>
              <p>
                We poured our hearts and souls into Pizza Shark, from perfecting
                our dough recipe to creating silly puns for our pizza names. We
                wanted to create a fun and welcoming space where people could
                enjoy great pizza and have a laugh at the same time.
              </p>
              <p>
                Fast forward a few years, and we're blown away by how much love
                and support we've received from our community. We've expanded to
                multiple locations in Brighton, but we've never lost sight of
                our roots. We're still just a bunch of pizza-loving friends who
                want to spread joy and laughter with every slice.
              </p>
              <p>
                So come on in, grab a slice, and join us in celebrating the
                magic of pizza and sharks. We promise you won't regret it!
              </p>
            </div>
            <img src={image} alt='Our Story' />
          </div>
        </div>
      </section>
      <section className='reviews-section'>
        <h2>Reviews</h2>
        {/* <div className='reviews-content'>
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
        </div> */}
        <ReviewCarousel />
      </section>
      <section className='footer-section'>
        <div className='footer-content'>
          <img src={logo} alt='Pizza Shark Logo' />
          <p>
            1234 Shark Street, Brighton, UK
            <br />
            01234 567890
          </p>
          <p>
            <a href='mailto:'>[email protected]</a>
          </p>
        </div>
      </section>
    </div>
  );
}
