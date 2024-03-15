import React from "react";
import { GrLocation } from "react-icons/gr";
import { TbMapPinCode } from "react-icons/tb";
import { MdLocalPhone } from "react-icons/md";
import { FaCircleInfo } from "react-icons/fa6";

const ProfileCard = (props) => {
  const { ArrayLength } = props;
  console.log(ArrayLength);
  return (
    <div className={`flex flex-col items-center justify-center bg-[#f0eded] shadow-sm rounded-lg p-3 ${ArrayLength == 1 ? " w-[310px] mt-4" : " "} `}>
      <div className="flex justify-center rounded-full overflow-hidden w-[130px] h-[130px]  m-5" >
        <img
          className="z-10 w-full h-full object-cover "
          src="NoProfile.webp"
          alt="im"
        />
        <div className="absolute bottom-1 flex gap-2  left-1/2 transform -translate-x-1/2">

        </div>
      </div>
      <div className="-mt-2 text-center">


        <p className="text-[0.9em]  font-bold">Satyam Kumar Gupta </p>

        {/* <p className="text-[0.8em] ">Chartered Accountant</p> */}


        <p className="text-[0.7em] text-gray-500 text-center mt-1">
          Solan,Himachal Pradesh{" "}
        </p>

      </div>

      <div className="flex mt-3 justify-evenly w-full mb-3 ">
        <span className=" z-30 flex  items-center justify-center bg-white rounded-lg border-1.5 border-blue-400 p-2 hover:bg-blue-400">
          <MdLocalPhone className="text-black" />
          <span className="text-[0.6em] ml-1 ">
            Call Now
          </span>
          
        </span>
        <span className=" right-2 z-30 flex w-[6em] items-center bg-blue-400 justify-center  rounded-lg text-white p-2 hover:bg-blue-400">
          <FaCircleInfo className="text-white" /><span className="text-[0.6em] ml-1 ">
            View Profile
          </span>
        </span>
      </div>
    </div>
  );
};

export default ProfileCard;
