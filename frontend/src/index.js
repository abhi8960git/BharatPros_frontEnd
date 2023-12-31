import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navitems from "./components/Dashborad/Navitems";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Hotel from "./Pages/Hotel";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <Router>
        <Navitems />
        <App />
        <Routes>
          <Route path="/hotels" Component={Hotel} />
        </Routes>
      </Router>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


