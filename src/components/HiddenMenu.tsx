import { Box, Button, HStack, Icon, Show, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsFillHouseHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import useDataStore from "../Zstore/store";
import routes from "../router/constants";

function HiddenMenu() {
  const isLoggedIn = useDataStore((select) => select.isLogged);
  const setLoggedIn = useDataStore((select) => select.setLogged);
  const [expanded, setExpanded] = useState(false);
  return (
    <Show below="md">
      <HStack className="ms-2">
        <Icon color={"red"} boxSize={10} as={BsFillHouseHeartFill} />
        <Text fontSize={"30px"} marginTop={4}>
          RealST
        </Text>
      </HStack>
      <Button
        position={"absolute"}
        borderRadius={"100%"}
        top={expanded ? "0" : "10px"}
        right={expanded ? "35%" : "5px"}
        width={"50px"}
        height={"50px"}
        onClick={() => setExpanded(!expanded)}
        bg={"gray"}
        display={"flex"}
        flexDir={"column"}
        zIndex={2}
      >
        {expanded ? (
          "X"
        ) : (
          <Box position={"absolute"} top={3.5} left={3}>
            <Box marginBottom={2} height={0.5} width={6} bg={"black"}></Box>
            <Box marginBottom={2} height={0.5} width={6} bg={"black"}></Box>
            <Box marginBottom={2} height={0.5} width={6} bg={"black"}></Box>
          </Box>
        )}
        {/* {expanded ? "X" : "menu"} */}
      </Button>
      <Box
        position={"absolute"}
        top={"0"}
        right={"0"}
        height={"180%"}
        display={expanded ? "flex" : "none"}
        flexDir={"column"}
        alignItems={"center"}
        width={"50%"}
        bg={"gray"}
        zIndex={1}
      >
        <Link to={"/"} className="pt-5">
          <Text fontWeight={"bolder"}>home</Text>
        </Link>
        <Link to={"/list"} className="pt-5">
          <Text fontWeight={"bolder"}>listings</Text>
        </Link>

        {!isLoggedIn && (
          <Link to={"/login"} className="pt-5">
            <Text fontWeight={"bolder"}>login</Text>
          </Link>
        )}

        {!isLoggedIn && (
          <Link to={"/login"} className="pt-5">
            <Text fontWeight={"bolder"}>sign up</Text>
          </Link>
        )}

        {isLoggedIn && (
          <Link to={routes.profile} className="pt-5">
            <Text fontWeight={"bolder"}>profile</Text>
          </Link>
        )}
        {isLoggedIn && (
          <Link
            to={"/"}
            className="pt-5"
            onClick={() => {
              setLoggedIn(false);
            }}
          >
            <Text fontWeight={"bolder"}>logout</Text>
          </Link>
        )}
      </Box>
    </Show>
  );
}

export default HiddenMenu;
