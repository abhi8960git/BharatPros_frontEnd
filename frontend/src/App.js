import "./App.css";
import Header from "./components/Dashborad/Header";
import { Wrapper } from "./components/Dashborad/Wrapper";
import CategorySection from "./components/Dashborad/CustomCategory";
import ElectricalCategories from './components/Json_utils/ElectricalCategory.json'

function App() {
  return (
    <Wrapper>
      <Header />
      <CategorySection categories={ElectricalCategories} />
    </Wrapper>
  );
}

export default App;
