import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navitems from "./components/Dashborad/Navitems";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Hotel from "./Pages/Hotel";
import Home from "./Pages/Home";
import SimpleBottomNavigation from "./components/Dashborad/MobileNav";
import { NextUIProvider } from "@nextui-org/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <div className="w-full">
        <div className="">
          <Navitems />
        </div>
        <NextUIProvider>
          <App></App>
        </NextUIProvider>

        <div className="">
          <SimpleBottomNavigation />
        </div>
      </div>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
