import { Box, Show, SimpleGrid } from "@chakra-ui/react";
import useDataStore from "../../Zstore/store";
import { listData } from "../../data/data";
import Map from "../../map/Map";
import HomeCard from "../HomeCard";
import Filter from "./Filter";
import HiddenMenu from "../HiddenMenu";

// import MainSection from "../MainSection";

function ListPage() {
  const minPrice = useDataStore((select) => select.filterQuery.minPrice);
  const maxPrice =
    useDataStore((select) => select.filterQuery.maxPrice) || 1000000;

  const filteredData = listData
    .filter((item) => item.price > minPrice!)
    .filter((item) => item.price < maxPrice!);

  //

  return (
    <div>
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
              <Filter />
              <HomeCard />
            </Box>
          </Box>
          <Box borderRadius={10} bg={"#C4DAD2"}>
            <Show above="md">
              {filteredData.length > 0 && (
                <Map height="1000px" data={filteredData} />
              )}
            </Show>
          </Box>
        </SimpleGrid>
      </Box>
    </div>
  );
}

export default ListPage;
