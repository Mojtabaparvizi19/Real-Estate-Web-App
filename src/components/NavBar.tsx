import { Box, Button, HStack, Image, Text, Show, Icon } from "@chakra-ui/react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useDataStore from "../Zstore/store";
import { BsFillHouseHeartFill } from "react-icons/bs";

function NavBar() {
  const isLogged = useDataStore((select) => select.isLogged);
  const setLoggedIn = useDataStore((select) => select.setLogged);

  const navigate = useNavigate();
  return (
    <Show above="md">
      <Box>
        <Box className="px-2">
          <HStack className="justify-content-between p-1">
            <HStack>
              <Box marginRight={"20px"}>
                <NavLink to={"/"} color={"black"}>
                  <HStack>
                    <Icon
                      className="mb-3"
                      color={"red"}
                      boxSize={10}
                      as={BsFillHouseHeartFill}
                    />
                    <Text fontSize={"30px"}>RealST</Text>
                  </HStack>
                </NavLink>
              </Box>
              <Box display={"flex"}>
                <Link className="ms-3" to={"/"}>
                  <Text>Home</Text>
                </Link>

                {isLogged && (
                  <Link className="ms-3" to={"/list"}>
                    <Text>Listings</Text>
                  </Link>
                )}
              </Box>
            </HStack>

            {!isLogged && (
              <div>
                <Button
                  onClick={() => navigate("/login")}
                  className="m-2"
                  colorScheme="red"
                >
                  sign in
                </Button>
                <Button
                  onClick={() => {
                    navigate("/login");
                  }}
                  colorScheme="yellow"
                >
                  sign up
                </Button>
              </div>
            )}
            {isLogged && (
              <>
                <HStack>
                  <Button onClick={() => navigate("/profile")}>Profile</Button>
                  <Button
                    onClick={() => {
                      setLoggedIn(false);
                      navigate("/");
                    }}
                    colorScheme="yellow"
                  >
                    sign out
                  </Button>
                  <Image
                    boxSize={"40px"}
                    src={
                      "https://cdn-icons-png.flaticon.com/512/219/219970.png"
                    }
                  />
                </HStack>
              </>
            )}
          </HStack>
        </Box>
      </Box>
    </Show>
  );
}

export default NavBar;
