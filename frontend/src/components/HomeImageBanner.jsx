import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeImageBanner = () => {
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

  // const BannerImages = [
  //   '/Poster_1.jpeg',
  //   '/Poster_2.jpeg',
  //   '/Poster_3.jpeg',
  //   '/Poster_5.jpeg',
  //   '/Poster-Services-Taxi.jpeg'
  // ];
  const BannerImages = [
    
    '/Poster-Services-Taxi.jpeg',
    '/Poster-Services-Electrician.jpeg',
    '/Poster-Services-Homestays.jpeg',
    '/Poster-Services-Plumber.jpeg',
    '/Poster-Services-Property.jpeg',
  ];

  return (
    
    // <div className=" w-full overflow-hidden ">
    //   <Slider {...settings}>
    //     {BannerImages.map((e, index) => (
    //       <div key={index}>
    //         <img src={e} alt={`Poster ${index + 1}`} width="full" />
    //       </div>
    //     ))}
    //   </Slider>
    // </div>

    <div className="flex justify-center items-center h-full">
      <div className="w-full overflow-hidden">
        <Slider {...settings}>
          {BannerImages.map((e, index) => (
            <div key={index}>
              <img src={e} alt={`Poster ${index + 1}`} className="mx-auto" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeImageBanner;
