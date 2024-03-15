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
        <Search/>

        </div>

        {/* <div className=" mt-3 flex flex-col gap-3">
          {[0, 1, 2].map(() => (
            <>
              <HotelCard />
            </>
          ))}
        </div> */}
        
        <div className="mt-3 lg:grid lg:grid-cols-3  gap-3 md:grid md:grid-cols-2">
          {[0, 1, 2,3,4,5].map(() => (
            <div className="w-full ">
              <HotelCard />
            </div>
          ))}
        </div>

      </div>
    </Wrapper>
  );
};

export default Hotel;
