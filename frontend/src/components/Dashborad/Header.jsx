import React from "react";
import CustomText from "./CustomText";
import Link from 'react-dom'
const categoriesData = [
  {
    name: "Hotels",
    color: "bg-#bada55",
    image: "/hotel.png",
    link: "/hotels",
  },
  {
    name: "Home Stays",
    color: "bg-#ffe4e1",
    image: "/home.png",
    link: "/home-stays",
  },
  {
    name: "Adventure Activities",
    color: "bg-#ffc0cb",
    image: "/travel..png",
    link: "/adventure-activities",
  },
  {
    name: "Jobs",
    color: "bg-#c6e2ff",
    image: "/job.png",
    link: "/jobs",
  },
];

const Header = () => {
  return (
    <div className="mt-3">
      {/* <CustomText>Categories</CustomText> */}

      <div className=" mx-3 grid grid-cols-2 gap-y-1 overflow-hidden max-w-[100%] m-auto">
        {categoriesData.map((category, index) => (
          // <Link>
            <div
              className="flex flex-col  justify-center items-center  rounded-md bg-transparent "
              key={category.name}
            >
              <div
                key={category.name}
                className="flex flex-col justify-center items-center bg-[#f5f5f5] border border-[#e9e4e4a9]  rounded-lg shadow-sm "
              >
                <img src={category.image} alt={category.name} width={160} />
              </div>
              <p className="text-[13px] font-[500] mt-1 ">{category.name}</p>
            </div>
          // </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
