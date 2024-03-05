import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdCall } from "react-icons/io";
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
          <div key={index} className="py-4 sm:py-10 px-8 bg-[#f5f5f5] ">
            <div className="flex justify-center items-center ">
              <div className="w-full overflow-hidden rounded-md object-contain h-[178px] ">
                {hotelCard[0].hotelImages == 0 ? (
                 <div className=" -mt-2 relative flex items-center justify-center">
                 <img src="/hotelNoImage.jpg" alt="hotelNoImage" width="full" height="full" />
               </div>
                ) : (
                  <Slider {...settings}>
                    {hotelCard[0].hotelImages.map((e, index) => (
                      <>
                        <div key={index} className="rounded-md object-contain  flex items-center justify-center ">
                          <div>
                            <img src={e} alt={e} width="full" height="full" />
                          </div>
                        </div>
                      </>
                    ))}
                  </Slider>
                )}
              </div>
            </div>
            <div className="flex flex-col items-center mt-2 mx-2 gap-1">
              
              <div className="flex justify-center w-full">
                
                <div className="flex justify-center gap-1 items-end bg-black/10 px-2 py-1 rounded-full active:scale-105 duration-200">
                  
                  <p className="bg-black py-[3px] text-white w-8 flex items-center justify-center rounded-full text-sm font-bold ">
                    {/* {hotel.hotel.rating}{" "} */} 
                    <span className="animate-pulse"><IoMdCall/></span>
                  </p>
                  <span className="text-gray-500 text-[0.8em] text-center">8219136329</span>
                </div>
                {/* <div className="flex gap-1 items-center">
                  <p className="font-bold">{hotel.pricing.per_night_price}</p>
                  <span>
                    /
                    <span className="text-gray-500 text-[0.8em]">
                      {" "}
                      Per Night
                    </span>
                  </span>{" "}
                </div> */}
              </div>
              <p className="font-bold text-center">{hotel.hotel.name}</p>
            </div>

            <p className="mx-2 text-[0.8em] text-gray-500 text-center">
              {hotel.hotel.address}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HotelCard;
