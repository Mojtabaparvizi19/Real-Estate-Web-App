import { Box, Show } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import ColorModeSwitch from "./ColorModeSwitch";

function Layout() {
  return (
    <Box width={"1400px"} maxWidth={"1400px"}>
      <ColorModeSwitch />
      <Show above="md">
        <NavBar />
      </Show>
      <Outlet />
    </Box>
  );
}

export default Layout;
