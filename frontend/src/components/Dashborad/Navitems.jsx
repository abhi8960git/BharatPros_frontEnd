import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const SearchComponent = () => {
  return (
    <div className="flex items-center  border border-gray-300 p-1 rounded-[10px] w-[95%] bg-white hover:border-gray-300 transition-all duration-200">
      <CiSearch className="bg-white ml-1 text-2xl" />
      <input
        type="text"
        placeholder="Search..."
        className=" px-2 py-1 rounded focus:outline-none  bg-white"
        // onChange={onChange}
      />
    </div>
  );
};

const Navitems = () => {
  return (
    <>
      <div className="bg-zinc-100 shadow-sm flex justify-between px-3 items-center py-3">
        <div>
          <h1 className="text-lg font-bold text-[#111111]">Himachal Pradesh</h1>
          <span className="flex items-center gap-1 ml-[2px] cursor-pointer hover:bg-zinc-400 transition-all duration-200"> Chamba<IoIosArrowDown /></span>
        </div>
        <span className="text-3xl">
          <GiHamburgerMenu />
        </span>
      </div>

      <div className="flex justify-center items-center mt-3">
        <SearchComponent />
      </div>
    </>
  );
};

export default Navitems;
