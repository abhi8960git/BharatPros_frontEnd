import React from 'react'
import Swipe from './Swiper';

const hotelCard = {
    hotel: {
      name: "Luxury Hotel",
      address: "123 Main Street, Cityville",
      rating: 4.5
    },
    pricing: {
      per_night_price: "$200"
    },
    hotelImages: [
      "/hotel1.1.jpeg",
      "/hotel1.2.jpeg",
      "/hotel1.3.jpeg",
      "/hotel1.4.jpeg",
      
    ]
  };

const HotelCard = () => {
  return (
    <div className=''>
      <Swipe photo1={hotelCard.hotelImages[0]} photo2={hotelCard.hotelImages[1]} photo3={hotelCard.hotelImages[2]} photo4={hotelCard.hotelImages[3]}/>
    </div>
  )
}

export default HotelCard