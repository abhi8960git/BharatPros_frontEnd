import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Hotel from "./Pages/Hotel";
import ServiceProviders from "./Pages/ServiceProviders";
import "react-multi-carousel/lib/styles.css";
import jobs from "./components/jobs";
import { Register } from "./components/registerPage";
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
          <Route path="/jobs" Component={jobs}/>
          <Route path="/register" Component={Register}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
