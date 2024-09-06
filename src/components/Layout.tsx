import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";
import NavBar from "./NavBar";

function Layout() {
  return (
    <Box width={"1400px"} maxWidth={"1400px"}>
      <ColorModeSwitch />

      <NavBar />

      <Outlet />
    </Box>
  );
}

export default Layout;
