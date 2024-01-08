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
    >
      {/* Your mobile side navigation content goes here */}
      <ul>
        <li>Mobile Nav Item 1</li>
        <li>Mobile Nav Item 2</li>
        <li>Mobile Nav Item 3</li>
      </ul>
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
