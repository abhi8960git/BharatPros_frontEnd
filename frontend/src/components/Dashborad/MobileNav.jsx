import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { IoLogOutOutline } from "react-icons/io5";
import { CgLogOut, CgProfile, CgWorkAlt } from "react-icons/cg";
import { MdOutlineWorkHistory } from "react-icons/md";
import { AiFillAmazonCircle } from "react-icons/ai";

const menuItems = [
  {
    id: 1,
    label: "MyProfile",
    icon: "/user_profile_icon.svg",
    link: "/profile",
  },
  {
    id: 2,
    label: "My Services",
    icon: "/services_icon.svg",
    link: "/services",
  },
  { id: 3, label: "Logout", icon: "/logout_icon.svg", link: "/logout" },
  { id: 4, label: "About Us", icon: "/about_icon.svg", link: "/about" },

];

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
      className="bg-[#cfcdcd] h-full z-50"
    >
      {/* Your mobile side navigation content goes here */}
      <div className=" bg-[#f5f5f5] pt-[30px] h-full ">
        {/* header div */}
        <div className="bg-[#cfcdcd] py-2  flex items-center mx-2 rounded-md shadow-md mb-2 ">
          <img src="mobile_user_icon.png" alt="user_icon" width={80} />
          <div className="flex flex-col justify-center  ">
            <p className="font-bold text-gray-600 px-2 text-2xl ">
              Welcome Abhishek!
            </p>
            <p className="text-gray-800 font-bold px-2 ">8219136329</p>
          </div>
        </div>

        <div className="w-full ">
          <ul className="w-full grid grid-cols-2">
            {menuItems.map((item) => (
              <li key={item.id} className="col-span-1">
                <div className="flex flex-col gap-2 py-3 px-2 font-bold text-xl justify-center items-center m-2 bg-blue-100 shadow-sm border border-gray-500 rounded-md hover:bg-slate-300 transition-all duration-200">
                  <img src={item.icon} alt={`${item.label}_icon`} width={50} />
                  {item.label}
                </div>
              </li>
            ))}
          </ul>
        </div>


        <div className="px-3 mt-3">
          <p className="font-extrabold text-3xl text-gray-400">BharatPros</p>
          <p className="mt-3">Terms and Conditions </p>
          <p>Customer Care</p>
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
