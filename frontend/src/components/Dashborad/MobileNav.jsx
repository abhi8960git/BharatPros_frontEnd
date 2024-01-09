import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { IoLogOutOutline } from "react-icons/io5";
import { CgLogOut, CgProfile, CgWorkAlt } from "react-icons/cg";
import { MdOutlineWorkHistory } from "react-icons/md";
import { AiFillAmazonCircle } from "react-icons/ai";

const MobileUserSideNav = ({ onClose }) => {
  return (
    <div
      onClick={onClose} // Close the mobile side nav when clicking anywhere on the overlay
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "white", // semi-transparent black background
        zIndex: 0,
      }}
      className="bg-[#cfcdcd]"
    >
      {/* Your mobile side navigation content goes here */}
      <div className=" bg-[#f5f5f5] pt-[40px]">
        {/* header div */}
        <div className="bg-white py-2  flex items-center mx-2 rounded-md shadow-sm">
          <img src="mobile_user_icon.png" alt="user_icon" width={80} />
          <p className="font-bold text-gray-600 px-2 text-2xl">
            Welcome Abhishek!

          </p>
        </div>

        <div className=" w-full">
          <ul className="w-full grid grid-cols-2 ">
            <li className="col-span-1 ">
              <li className="flex flex-col  gap-2 py-3 px-2 font-bold text-xl justify-center items-center m-2 bg-white  shadow-sm rounded-md ">
                {" "}
                <img src="/user_profile_icon.svg" alt="user_profile_icon" width={60} />
                MyProfile{" "}
              </li>
              <li className="flex flex-col  gap-2 py-3 px-2 font-bold text-xl justify-center items-center bg-white m-2  shadow-sm rounded-md">
                {" "}
                <img src="/services_icon.svg" alt="services_icon" width={60} />
                My Services
              </li>

            </li>
            <li className="flex gap-2 py-3 px-2 col-span-1 text-2xl font-bold flex-col items-center justify-center bg-white m-2 shadow-sm rounded-md">
              {" "}
              <img src="/logout_icon.svg" alt="logout_icon" width={100} />
              logOut
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <Box
      sx={{
        zIndex: 40,
        pb: 7,
      }}
    >
      {isOpen && <MobileUserSideNav onClose={closeNav} />}

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          style={{ textDecorationColor: "black" }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<img src="home_icon.svg" alt="home_icon" />}
          />

          <BottomNavigationAction
            label="Register"
            icon={<img src="/register_icon.svg" alt="register_icon" />}
          />

          <BottomNavigationAction
            label="My Profile"
            icon={<img src="/user_profile_icon.svg" alt="user_profile_icon" />}
            onClick={toggleNav} // Open the mobile side nav on click
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
