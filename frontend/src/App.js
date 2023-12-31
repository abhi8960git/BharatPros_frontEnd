import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Hotel from "./Pages/Hotel";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
        <Routes>
          <Route path="/hotels" Component={Hotel} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
