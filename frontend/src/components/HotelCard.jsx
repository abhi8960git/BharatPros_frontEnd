import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdCall } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
const hotelCard = [
  {
    hotel: {
      name: "Luxury Hotel ShowCase bamekljlkdk",
      address: "123 Main Street, Cityville",
      rating: "4.5",
    },
    pricing: {
      per_night_price: "$200",
      total_price: "$85954",
    },
    hotelImages: [
      "/hotel1.1.jpeg",
      "/hotel1.2.jpeg",
      // "/hotel1.3.jpeg",
      "/hotel1.4.jpeg",
      "/hotel1.5.jpeg"
    ],
  },
];

const HotelCard = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    // autoplay: true,
    autoplaySpeed: 3000, // Adjust the autoplay speed in milliseconds
    // arrows: false, // Remove navigation icon
  };

  return (
    <>
      <div>
        {hotelCard.map((hotel, index) => (
          <div key={index} className="py-4 sm:py-10 px-8 bg-[#f5f5f5] rounded-lg ">
                <div className="flex">
      <div className="w-full overflow-hidden rounded-md h-[178px]">
        {hotelCard[0].hotelImages.length === 0 ? (
          <div className="-mt-2 relative flex items-center justify-center">
            <img src="/hotelNoImage.jpg" alt="hotelNoImage" width="full" height="full" />
          </div>
        ) : (
          <Slider {...settings}>
            {hotelCard[0].hotelImages.map((image, index) => (
              <div key={index} className="rounded-md flex items-center justify-center bg-white">
                <div className="relative flex justify-center">
                  <img
                    src={image}
                    alt={`hotelImage-${index}`}
                    className="object-contain "
                    // style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>


            <div className="flex flex-col mt-2 mx-2 gap-1">

              <div className="flex justify-center w-full">


              </div>
              <p className="font-bold ">{hotel.hotel.name}</p>
            </div>

            <p className="mx-2 text-[0.8em] text-gray-500 ">
              {hotel.hotel.address}
            </p>

            <div className="flex justify-between  items-end px-2 py-1 rounded-full duration-200 mt-1">
              <div>
                <p><span className="font-bold">124rs </span>/<span className="text-sm">night</span></p>
              </div>

              <span className="text-md text-center bg-blue-400 px-4 py-1 shadow rounded-[4px] font-bold cursor-pointer">Book now</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HotelCard;
