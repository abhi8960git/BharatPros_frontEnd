import React from "react";
import Header from "../components/Dashborad/Header";
import { Wrapper } from "../components/Dashborad/Wrapper";
import CategorySection from "../components/Dashborad/CustomCategory";
import ElectricalCategories from "../components//Json_utils/ElectricalCategory";
import ConstructionCategories from "../components//Json_utils/Construction";
import Rental from "../components//Json_utils/Rentals.json";
import Transport from "../components//Json_utils/Transportation.json";
import Wedding from "../components//Json_utils/WeddingAndEvent_Mangement.json";
const Home = () => {
  return (
    <div>
      <Wrapper>
      <Header />
      <CategorySection categories={ElectricalCategories} />
       <CategorySection categories={ConstructionCategories} />
      <CategorySection categories={Rental} />
      <CategorySection categories={Transport} />
      <CategorySection categories={Wedding} /> 
    </Wrapper>
    </div>
  );
};

export default Home;
