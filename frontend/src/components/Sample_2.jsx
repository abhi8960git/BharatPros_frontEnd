import React from "react";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";





function SampleNextArrow(props) {
   const { className, style, onClick } = props;
  return (
      <img src="forward.png" alt="forward" {...props} />
  );
}

function SamplePrevArrow(props) {
  return (

    <img src="backArrow.png" alt="forward" className="" {...props} />
  );
}

const settings = {

  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  // autoplay: true,
  autoplaySpeed: 3000, // Adjust the autoplay speed in milliseconds
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,

};




const DesktopBanners = () => {
  return (
    <div className=" bg-none lg:max-w-[80em] m-auto w-full px-2 mb-6 rounded-2xl mt-3">
      <div className="rounded-md">
        <Slider
          {...settings}
        >
          {[
            { imgName: "Poster-Services-Electrician.jpeg" },
            { imgName: "Poster-Services-Electrician.jpeg" },
            { imgName: "Poster-Services-Electrician.jpeg" },
            { imgName: "Poster-Services-Electrician.jpeg" },
            { imgName: "Poster-Services-Electrician.jpeg" },
            { imgName: "Poster-Services-Electrician.jpeg" },
            // { imgName: "HomeStaysBanner.jpeg"},
            // { imgName: "PlumberBanner.jpeg"},
          ].map((e, index) => (
            <div
              key={index}
              className=" bg-none lg:w-[18em] gap-3  cursor-pointer "
            >
              <img
                src={e.imgName}
                alt={'Banner Tiles'}
                // width="full"
                width={400}

                className="object-cover   hover:scale-105 transitions-all duration-200 rounded-xl "
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DesktopBanners