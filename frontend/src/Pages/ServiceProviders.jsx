import React from "react";
import { Wrapper } from "../components/Dashborad/Wrapper";
import SearchComponent from "../components/Dashborad/SearchComponent";
import HotelCard from "../components/HotelCard";
import ProfileCard from "../components/ProfileCard";
import Search from "../components/Search";

const ServiceProviders = () => {
  const myArray = [0,1]
  return (
    <Wrapper>
      <div className="">
        <div className="flex justify-center sticky">
          {/* <SearchComponent placeholderText="Search Hotels.." /> */}
          <Search />
        </div>
        <div className="flex  gap-2 justify-center  mx-1 ">
          {myArray.map((index,e) => (
            <div key={index}>
              {/* <p>{myArray.length}</p> */}
              <ProfileCard ArrayLength={myArray.length} />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default ServiceProviders;
