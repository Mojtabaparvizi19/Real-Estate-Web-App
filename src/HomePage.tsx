import { Box, Image, Show, SimpleGrid } from "@chakra-ui/react";
import backgroundImage from "./assets/bg.png";
import HiddenMenu from "./components/HiddenMenu";
import MainSection from "./components/MainSection";
import style from "./style/style";

function HomePage() {
  console.log(style);
  return (
    <>
      <Box style={style.leftColoumn}>
        <HiddenMenu />
        <SimpleGrid
          style={style.style}
          columns={style.columns}
          templateColumns={{
            ...style.tempColumns,
          }}
        >
          <Box>
            <Box>
              <MainSection />
            </Box>
          </Box>
          <Show above="md">
            <Box style={style.rightColomn}>
              <Image src={backgroundImage} />
            </Box>
          </Show>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default HomePage;
