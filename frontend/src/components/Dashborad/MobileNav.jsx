import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { IoLogOutOutline } from "react-icons/io5";
import { CgLogOut, CgProfile, CgWorkAlt } from "react-icons/cg";
import { MdOutlineWorkHistory } from "react-icons/md";
import { AiFillAmazonCircle } from "react-icons/ai";
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        zIndex: 40,
        pb: 7,
      }}
    >
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
        >
          <BottomNavigationAction
            label="My Profile"
            icon={<CgProfile/>}
          />
          <BottomNavigationAction
            label="My Services"
            icon={<CgWorkAlt/>}
          />
          <BottomNavigationAction
            label="Created Jobs"
            icon={<MdOutlineWorkHistory/>}
          />
          <BottomNavigationAction
            label="LogOut"
            icon={<CgLogOut />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
