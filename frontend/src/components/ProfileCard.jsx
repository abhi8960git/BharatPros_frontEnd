import React from "react";
import { GrLocation } from "react-icons/gr";
import { TbMapPinCode } from "react-icons/tb";
import { MdLocalPhone } from "react-icons/md";
import { FaCircleInfo } from "react-icons/fa6";

const ProfileCard = (props) => {
  const {ArrayLength} = props;
  console.log(ArrayLength);
  return (
    <div className={`flex flex-col justify-center bg-[#f5f5f5] p-3 ${ArrayLength == 1 ? " w-[310px] mt-4" : " " } `}>
      <div className={`relative rounded-md overflow-hidden h-[170px] ${ArrayLength == 1 ? "h-[270px]" : " "} `} >
        <img
          className="z-10 w-full h-full object-cover"
          src="/profile.jpg"
          alt="im"
        />
        <div className="absolute bottom-1 flex gap-2  left-1/2 transform -translate-x-1/2">
          <span className=" z-30 flex items-center justify-center bg-white rounded-full p-2 hover:bg-blue-400">
            <MdLocalPhone className="text-black" />
          </span>
          <span className=" right-2 z-30 flex items-center justify-center bg-white rounded-full p-2 hover:bg-blue-400">
            <FaCircleInfo className="text-black" />
          </span>
        </div>
      </div>
      <div className="mt-3">
        <div className="flex gap-1 justify-start">
          <span>
            <GrLocation />
          </span>
          <p className="text-[0.7em] text-gray-500 flex items-center gap-1 ">
            Solan,Himachal Pradesh{" "}
          </p>
        </div>
        

        <p className="text-[0.8em] font-[600]">Chartered Accountant</p>
        <p className="text-[0.7em] text-gray-500">Satyam Kumar Gupta </p>
      </div>
    </div>
  );
};

export default ProfileCard;
