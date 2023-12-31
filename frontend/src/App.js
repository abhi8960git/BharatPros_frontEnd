import "./App.css";
import Header from "./components/Dashborad/Header";
import { Wrapper } from "./components/Dashborad/Wrapper";
import CategorySection from "./components/Dashborad/CustomCategory";
import ElectricalCategories from "./components/Json_utils/ElectricalCategory.json";
import ConstructionCategories from "./components/Json_utils/Construction.json";
import Rental from "./components/Json_utils/Rentals.json";
import Transport from "./components/Json_utils/Transportation.json";
import Wedding from "./components/Json_utils/WeddingAndEvent_Mangement.json";
import { Router,Route, Link } from "react-router-dom";
import Hotel from "./Pages/Hotel";
function App() {
  return (
    <Wrapper>
      <Header />
      <CategorySection categories={ElectricalCategories} />
       <CategorySection categories={ConstructionCategories} />
      <CategorySection categories={Rental} />
      <CategorySection categories={Transport} />
      <CategorySection categories={Wedding} /> 
  
      
    </Wrapper>
  );
}

export default App;
