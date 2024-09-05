import { Box, Image, Show, SimpleGrid } from "@chakra-ui/react";
import backgroundImage from "./assets/bg.png";
import HiddenMenu from "./components/HiddenMenu";
import MainSection from "./components/MainSection";

function App() {
  return (
    <>
      <Box width={"100%"} maxWidth={"1400px"}>
        <HiddenMenu />
        <SimpleGrid
          className=""
          borderRadius={10}
          margin={4}
          spacing={5}
          maxWidth={"1400px"}
          height={"90%"}
          columns={{ base: 1, md: 2 }}
          templateColumns={{
            base: "1fr",
            md: "2fr 1fr",
          }}
        >
          <Box>
            <Box
              borderRadius={15}
              height={"88vh"}
              width={"100%"}
              color={"black"}
            >
              <MainSection />
            </Box>
          </Box>
          <Show above="md">
            <Box height={"90vh"} color={"black"} bg={"#FFF5E4"}>
              <Image src={backgroundImage} />
            </Box>
          </Show>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default App;
