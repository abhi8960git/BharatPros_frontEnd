import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    ],
  },
];

const HotelCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the autoplay speed in milliseconds
    // arrows: false, // Remove navigation icon
  };

  return (
    <>
      <div>
        {hotelCard.map((hotel, index) => (
          <div key={index} className="py-4 px-8 bg-[#f5f5f5] ">
            <div className="flex items-center justify-center  ">
              <div className="w-full overflow-hidden rounded-md object-contain h-[178px]">
                <Slider {...settings}>
                  {hotelCard[0].hotelImages.map((e, index) => (
                    <div key={index} className="rounded-md object-contain ">
                      <img src={e} alt={e} width="full" height="full" />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="flex flex-col mt-2 mx-2 gap-1">
              <div className="flex justify-between">
                <div className="flex justify-center gap-1 items-end">
                  <p className="bg-black py-[3px] text-white w-8 flex items-center justify-center rounded-md text-sm font-bold ">
                    {hotel.hotel.rating}{" "}
                  </p>
                  <span className="text-gray-500 text-[0.8em]">10 Ratings</span>
                </div>
                <div className="flex gap-1 items-center">
                  <p className="font-bold">{hotel.pricing.per_night_price}</p>
                  <span>
                    /
                    <span className="text-gray-500 text-[0.8em]">
                      {" "}
                      Per Night
                    </span>
                  </span>{" "}
                </div>
              </div>
              <p className="font-bold">{hotel.hotel.name}</p>
            </div>

            <p className="mx-2 text-[0.8em] text-gray-500">
              {hotel.hotel.address}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HotelCard;
