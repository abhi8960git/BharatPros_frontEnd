import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const SearchComponent = () => {
  return (
    <div className="flex items-center border border-gray-300 p-1 rounded-[10px] w-[95%] bg-white hover:border-gray-300 transition-all duration-200">
      <CiSearch className="bg-white ml-1 text-2xl" />
      <input
        type="text"
        placeholder="Search..."
        className="px-2 py-1 rounded focus:outline-none bg-white"
        // onChange={onChange}
      />
    </div>
  );
};

const Navitems = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    console.log("toggle open");
  };

  const toggleCloseMobileMenu = () => {
    setMobileMenuOpen(false); // Set to false to close the mobile menu
    console.log("toggle close");
  };

  return (
    <>
      <div className="bg-zinc-100 shadow-sm flex justify-between px-3 items-center py-3 z-40">
        <div>
          <h1 className="text-lg font-bold text-[#111111]">Himachal Pradesh</h1>
          <span className="flex items-center gap-1 ml-[2px] cursor-pointer hover:bg-zinc-400 transition-all duration-200"> Chamba<IoIosArrowDown /></span>
        </div>
        <span className="text-3xl cursor-pointer" onClick={toggleMobileMenu}>
          <GiHamburgerMenu />
        </span>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed top-0 right-0 h-screen w-[60%] bg-white transform traslate-x-full transition-transform duration-300 ease-in-out z-50 ">
          <span className="absolute right-3 top-3 text-xl" onClick={toggleCloseMobileMenu}>
            <RxCross1 />
          </span>
          <div className="py-4 px-8">
            <p>Mobile Menu Item 1</p>
            <p>Mobile Menu Item 2</p>
            {/* Add more menu items as needed */}
          </div>
        </div>
      )}

      <div className="flex justify-center items-center mt-3">
        <SearchComponent />
      </div>
    </>
  );
};

export default Navitems;
