import React from "react";
import CustomText from "./CustomText";
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

      <div className="grid grid-cols-2 gap-y-1 overflow-hidden max-w-[80%] m-auto">
        {categoriesData.map((category, index) => (
          <div className="flex flex-col  justify-center items-center  rounded-md  " key={category.name}>
            <div
              key={category.name}
              className="flex flex-col justify-center items-center glass  rounded-lg shadow-sm "
            >
              <img src={category.image} alt={category.name} width={130} />
            </div>
            <p className="text-sm font-[400] mt-1 ">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
