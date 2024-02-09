import React from "react";
import Header from "../components/Dashborad/Header";
import { Wrapper } from "../components/Dashborad/Wrapper";
import CategorySection from "../components/Dashborad/CustomCategory";
import ElectricalCategories from "../components//Json_utils/ElectricalCategory";
import ConstructionCategories from "../components//Json_utils/Construction";
import Rental from "../components//Json_utils/Rentals.json";
import Transport from "../components//Json_utils/Transportation.json";
import Wedding from "../components//Json_utils/WeddingAndEvent_Mangement.json";
import HomeImageBanner from "../components/HomeImageBanner";
import HeroBanner from "../components/HeroBanner";
import DummyComponent from "../components/DummyComponent";
const Home = () => {
  return (
    <div>
      <Wrapper>
        {/* <div className="bg-[#f5f5f5] flex flex-col items-center justify-center  ">
          <img src='/Looking_service_providers.png' alt="image_service_provider"/>
          <button className="  bg-transparent hover:bg-[#c9c5c5] text-gray-600 font-bold  border-2 border-[#c5c5c5] p-2 rounded-lg px-3 shadow-sm mb-4">Register As service Provider</button>
        </div> */}
      {/* <Header /> */}
      <HomeImageBanner/>
      <HeroBanner/>
      <CategorySection categories={ElectricalCategories} />
      <CategorySection categories={ConstructionCategories} />
      <CategorySection categories={Rental} />
      <CategorySection categories={Transport} />
      <CategorySection categories={Wedding} /> 

      <DummyComponent/>
    </Wrapper>
    </div>
  );
};

export default Home;
