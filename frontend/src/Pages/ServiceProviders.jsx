import React from "react";
import { Wrapper } from "../components/Dashborad/Wrapper";
import SearchComponent from "../components/Dashborad/SearchComponent";
import HotelCard from "../components/HotelCard";
import ProfileCard from "../components/ProfileCard";
import Search from "../components/Search";

const ServiceProviders = () => {
  return (
    <Wrapper>
      <div className="">
        <div className="flex justify-center sticky">
          {/* <SearchComponent placeholderText="Search Hotels.." /> */}
          <Search />
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 mx-1 ">
          {[0, 1, 2].map((index) => (
            <div key={index}>
              <ProfileCard />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default ServiceProviders;
