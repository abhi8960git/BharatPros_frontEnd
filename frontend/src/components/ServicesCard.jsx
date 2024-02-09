import React from "react";
import { GoEye } from "react-icons/go";
import { IoCall, IoCallOutline } from "react-icons/io5";
const ServicesCard = () => {
  return (
    <div className="flex flex-col gap-3 mx-2 border-2 rounded-sm border-black/10   mb-5 ">
      {/* name */}
      <div className=" bg-black/10 rounded-b-full h-[150px] relative">
        <p className="text-center mt-6 font-medium pt-2 text-2xl  text-black/90 ">
          Abhishek kumar
        </p>
        <p className="absolute text-xs rounded-full shadow-xs top-1 right-2 bg-green-300 py-1 px-2 text-gray-700 ">Payment status : success </p>
        <p className="absolute text-xs rounded-full shadow-xs top-1 left-2 py-1 px-2 text-gray-700 border border-gray-300 px-4 ">Active till - 0.2em2-12-2024 </p>
        <p className="text-center text-xs py-1 text-black/60">
        Architects - Residenial
        </p>
        <div className="flex justify-around mt-[1.9em]">
          <button className="bg-green-300 p-3 text-xl border-3 border-white rounded-full active:scale-95 duration-200 transition-all "><GoEye/></button>
          <button className="bg-green-300 p-3 text-xl border-3 border-white rounded-full active:scale-95 duration-200 transition-all"><IoCall/></button>
        </div>
        <div className="w-[6em] absolute  -bottom-[5em] left-1/2 transform -translate-x-1/2 -translate-y-1/2   rounded-full border-3 border-white">
          <img
            src="/profile.png"
            alt="profile_image"
            width={100}
            height={100}
          />
             <p className="absolute text-[9px] rounded-full  top-0.5 -right-5 bg-green-700 py-0.5 px-1 pb-1 text-white ">Unavailable</p>

        </div>
      </div>
      {/* service name */}
      {/* <p className="text-center bg-blue-100 rounded-full py-2 mx-2 ">
        Architects - Residenial
      </p> */}
      {/* address */}

      <div className="text-center text-sm text-black/90 mt-4 p-3 ">
        <span>
          <span className="font-bold">Post Office : </span>Parwanoo
        </span>
        <span>Solan , Himachal Pradesh</span>
        <span>Pincode : 176310</span>
      </div>

      {/* <div className="flex gap-3 justify-center py-2 ">
        <button className="flex justify-center items-center  rounded-full    text-black/80 active:scale-105 transition-all duration-200 border bg-green-200 shadow-sm py-2 gap-2 px-4  ">
          View Profile
          <GoEye />
        </button>
        <button className="flex justify-center items-center  rounded-full    text-black/80 active:scale-105 transition-all duration-200 border bg-blue-200 shadow-sm py-2 gap-2 px-4  ">
          Call
          <IoCallOutline />
        </button>
      </div> */}
    </div>
  );
};

export default ServicesCard;
