import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Hotel from "./Pages/Hotel";
import ServiceProviders from "./Pages/ServiceProviders";
import "react-multi-carousel/lib/styles.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
        <Routes>
          <Route path="/hotels" Component={Hotel} />
          <Route path="/service-providers" Component={ServiceProviders}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
