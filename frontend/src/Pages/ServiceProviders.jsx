import React from "react";
import { Wrapper } from "../components/Dashborad/Wrapper";
import SearchComponent from "../components/Dashborad/SearchComponent";
import HotelCard from "../components/HotelCard";
import ProfileCard from "../components/ProfileCard";
import Search from "../components/Search";

const ServiceProviders = () => {
  const myArray = [0,1,2]
  return (
    <Wrapper>
      <div className="">
        <div className="flex justify-center sticky">
          {/* <SearchComponent placeholderText="Search Hotels.." /> */}
          <Search />
        </div>
        <div className={`${myArray.length == 1 ?'flex justify-center' : 'grid grid-cols-2'} `}>
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
