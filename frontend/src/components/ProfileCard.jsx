import React from "react";
import { GrLocation } from "react-icons/gr";
import { TbMapPinCode } from "react-icons/tb";
import { MdLocalPhone } from "react-icons/md";
import { FaCircleInfo } from "react-icons/fa6";

const ProfileCard = (props) => {
  const { ArrayLength } = props;
  console.log(ArrayLength);
  return (

    <div className={`flex lg:flex-row  flex-col  lg:gap-[5em] lg:px-6 lg:py-4 justify-evenly  lg:mx-3 items-center  border border-[#58585850] shadow-sm rounded-lg p-2 w-full relative `}>
      {/* <p className="text-[0.7em] text-gray-500 text-center mt-1">
            Solan,Himachal Pradesh{" "}
          </p> */}
      <div className=" " >
        <div className="w-[120px] h-[120px] rounded-full">
          <img
            className=" object-cover rounded-full "
            src="NoProfile.webp"
            alt="im"

          />
        </div>

        <div className=" text-center ">


          <p className="text-[0.9em]  font-bold">Satyam Kumar Gupta </p>

          {/* <p className="text-[0.8em] ">Chartered Accountant</p> */}




        </div>
      </div>


      <div className="flex lg:flex-col mt-5 justify-evenly w-full mb-3 gap-3 ">

        <span className=" z-30 flex  items-center justify-center bg-white rounded-lg border-1.5 border-blue-400 p-2 hover:bg-blue-400">
          <MdLocalPhone className="text-black" />
          <span className="text-[0.8em] ml-1 ">
            Call Now
          </span>

        </span>
        <span className=" right-2 z-30 flex  items-center bg-blue-400 justify-center  rounded-lg text-white p-2 hover:bg-blue-400">
          <FaCircleInfo className="text-white" /><span className="text-[0.8em] ml-1 ">
            View Profile
          </span>
        </span>
      </div>
    </div>
  );
};

export default ProfileCard;
