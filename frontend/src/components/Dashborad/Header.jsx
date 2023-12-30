import React from "react";
import CustomText from "./CustomText";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
const categoriesData = [
  {
    name: "Hotels",
    color: "bg-#bada55",
    image: "/hotel.png",
  },
  {
    name: "Home Stays",
    color: "bg-#ffe4e1",
    image: "/home.png",
  },
  {
    name: "Adventure Activities",
    color: "bg-#ffc0cb",
    image: "/travel..png",
  },
  {
    name: "Jobs",
    color: "bg-#c6e2ff",
    image: "/job.png",
  },
];

const Header = () => {
  return (
    <div className="mt-3">
      {/* <CustomText>Categories</CustomText> */}

      <div className="grid grid-cols-2 gap-2 overflow-hidden">
        {categoriesData.map((category, index) => (
          <div className="flex flex-col  justify-center bg-gray-100 rounded-md shadow-sm ">
            <div className="border-b border-zinc-200 ">
              <p className="text-lg font-[400] ml-4 ">
                {category.name}
              </p>
            </div>
            <div
              key={category.name}
              className="flex justify-center items-center "
            >
              <img src={category.image} alt={category.name} width={130} />
              <span className="text-6xl font-[300] text-[#DDA0DD] cursor-pointer hover:text-black transition-all duration-200">
                <IoArrowForwardCircleOutline />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
