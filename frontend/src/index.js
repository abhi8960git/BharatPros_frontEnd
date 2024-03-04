import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navitems from "./components/Dashborad/Navitems";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import Hotel from "./Pages/Hotel";
import Home from "./Pages/Home";
import SimpleBottomNavigation from "./components/Dashborad/MobileNav";
import { NextUIProvider } from "@nextui-org/react";
import NewHeroSection from "./components/NewHeroSection";
import NewTopHeaderSection from "./components/NewTopHeaderSection";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <>
      <Router>
        <div className="flex justify-center">
          <div className="w-full max-w-screen ">
            {/* {window.innerWidth <= 768 && (
              <div className="">
                <Navitems />
              </div>
            )} */}
            <Navitems/>
            {/* <NewTopHeaderSection/> */}
            {/* <NewHeroSection/> */}
            <NextUIProvider>
              <App></App>
            </NextUIProvider>
            {window.innerWidth <= 768 && (
              <div className="">
                <SimpleBottomNavigation />
              </div>
            )}
          </div>
        </div>
        
      </Router>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
