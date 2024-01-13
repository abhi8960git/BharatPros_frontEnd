import React from "react";
import CustomText from "./CustomText";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

const CategorySection = ({ categories }) => {
  return (
    <div className=" bg-[#f5f5f5] w-full px-2 py-1 mt-3">
      <CustomText fontSize="text-lg ml-1">{categories[0].categoryName}</CustomText>
      <div className="rounded-md">
        <Carousel
          swipeable={true}
          removeArrowOnDeviceType={["mobile"]}
          dotListClass="mt-"
          itemClass="carousel-item-padding-40-px mb-[6px]"
          responsive={responsive}
        >
          {categories[0].categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center cursor-pointer backdrop-blur-lg"
            >
              <div
                className={`overflow-hidden rounded-lg border-1 bg-[#f5f5f5] relative ${
                  category.name === "See more" ? "border-none" : ""
                } ${true ? "blur-[1px]" : ""}`}
              >
                <img src={category.image} alt={category.name} width={110} />
              </div>
              {true && (
                <p className="text-[0.8em] font-bold text-black bg-[#f5f5f5] p-2 rounded-md mt-1 absolute bottom-7 ">Coming Soon</p>
              )}
              {!category.comingSoon && (
                <p className="text-[0.8em] mt-1">{category.name}</p>
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CategorySection;
