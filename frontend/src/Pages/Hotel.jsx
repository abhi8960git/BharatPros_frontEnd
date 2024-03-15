import React from "react";
import { Wrapper } from "../components/Dashborad/Wrapper";
import SearchComponent from "../components/Dashborad/SearchComponent";
import HotelCard from "../components/HotelCard";
import Search from "../components/Search";

const Hotel = () => {
  return (
    <Wrapper>
      <div className="lg:w-[80em] m-auto ">
        <div className=" flex justify-center sticky">
          {/* <SearchComponent placeholderText="Search Hotels.." /> */}
          <Search />

        </div>

        {/* <div className=" mt-3 flex flex-col gap-3">
          {[0, 1, 2].map(() => (
            <>
              <HotelCard />
            </>
          ))}
        </div> */}

<div className="mt-3 flex flex-wrap justify-center">
          {[0,1,3,4].map((_, index) => (
            <div key={index} className="w-full lg:w-1/3 md:w-1/2 px-2 mb-4">
              <HotelCard />
            </div>
          ))}



</div>
      </div>
    </Wrapper>
  );
};

export default Hotel;
