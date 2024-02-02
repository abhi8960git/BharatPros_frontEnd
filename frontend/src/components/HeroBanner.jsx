import React from "react";

const HeroBanner = () => {
  return (
    <>
      <div className="flex text-xs text-center justify-center bg-blue-100 mx-2 mt-[80px] pb-[4em] rounded-b-[30px] gap-2 shadow-sm">
        {/* Image 3 */}
        <div className="-mt-[62px]">
          <img
            src="Hotel3D.webp"
            alt="good"
            width={100}
            height={100}
            className=" bg-black/20 rounded-full p-2 hover:scale-95 duration-200 transition-all py-3"
          />
          <p className="mt-4">Hotels</p>
        </div>

        {/* Image 1 */}
        <div className="-mt-[66px] text-center relative  ">
          <img
            src="Hills3D.png"
            alt="good"
            width={130}
            height={130}
            className=" bg-black/20 rounded-full p-1 hover:scale-95 duration-200 transition-all blur-[1px] pointer-events-none"
          />
          <p className="absolute bottom-[1em] text-xs translate-x-1/2 right-1/2 text-black rounded-b-full p-1 px-4  bg-blue-100 ">
            coming soon.
          </p>
          <p className="mt-2 text-center  absolute ">
            Adventure and Activities
          </p>
        </div>

        {/* Image 2 */}
        <div className="-mt-[62px]">
          <img
            src="Home3D.png"
            alt="good"
            width={100}
            height={100}
            className=" bg-black/20 rounded-full p-1 hover:scale-95 duration-200 transition-all"
          />
          <p className="mt-4">HomeStays</p>
        </div>
      </div>

      <p className=" mt-3 text-center text-xs">*= only for Himachal Region</p>
    </>
  );
};

export default HeroBanner;
