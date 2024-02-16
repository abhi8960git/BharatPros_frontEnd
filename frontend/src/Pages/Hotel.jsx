import React from "react";
import { Wrapper } from "../components/Dashborad/Wrapper";
import SearchComponent from "../components/Dashborad/SearchComponent";
import HotelCard from "../components/HotelCard";
import Search from "../components/Search";

const Hotel = () => {
  return (
    <Wrapper>
      <div className="">
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
        
        <div className="mt-3 flex flex-col gap-3 justify-center ">
          {[0, 1, 2].map(() => (
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
