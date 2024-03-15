import React from "react";
import { Wrapper } from "../components/Dashborad/Wrapper";
import SearchComponent from "../components/Dashborad/SearchComponent";
import HotelCard from "../components/HotelCard";
import ProfileCard from "../components/ProfileCard";
import Search from "../components/Search";
import ProfessionalServiceCard from "../components/ProfessionalServiceCard";

const ServiceProviders = () => {
  const myArray = [0,1,2,3]
  return (
    <Wrapper>
      <div className="lg:w-[80em] m-auto">
        <div className="flex justify-center sticky mt-3">
          {/* <SearchComponent placeholderText="Search Hotels.." /> */}
          <Search />
        </div>
        <div className={`${myArray.length == 1 ?'flex justify-center' : 'grid lg:grid-cols-4  md:grid-cols-3 gap-3 mx-3 mt-3 '} `}>
          {myArray.map((index,e) => (
            <div key={index}>
              {/* <p>{myArray.length}</p> */}
              <ProfileCard ArrayLength={myArray.length} />
            </div>
          ))}
        </div>

      {/* <ProfessionalServiceCard/> */}
      </div>
    </Wrapper>
  );
};

export default ServiceProviders;
