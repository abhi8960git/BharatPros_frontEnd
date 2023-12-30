import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const SearchComponent = () => {
  return (
    <div>
      <div class="group">
        <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input placeholder="Search" type="search" class="input" />
      </div>
    </div>
  );
};

const Navitems = () => {
  return (
   <>
    <div className="bg-zinc-100 shadow-sm flex justify-between px-3 items-center py-3">
      <h1 className="text-3xl font-bold text-[#a56ba5]">Bharat Pros</h1>
      <span className="text-3xl">
        <RxHamburgerMenu />
      </span>
    </div>

    <div className="flex justify-center items-center mt-3">
       <SearchComponent/> 
    </div>
   </>
  );
};

export default Navitems;
