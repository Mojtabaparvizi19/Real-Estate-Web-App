import { Box, Show, SimpleGrid } from "@chakra-ui/react";
import useDataStore from "../../Zstore/store";
import { listData } from "../../data/data";
import Map from "../../map/Map";
import HomeCard from "../HomeCard";
import Filter from "./Filter";
import HiddenMenu from "../HiddenMenu";
import style from "../../style/style";

function ListPage() {
  const minPrice = useDataStore((select) => select.filterQuery.minPrice);
  const maxPrice =
    useDataStore((select) => select.filterQuery.maxPrice) || 1000000;

  const filteredData = listData
    .filter((item) => item.price > minPrice!)
    .filter((item) => item.price < maxPrice!);

  return (
    <div>
      <Box width={"100%"} maxWidth={"1400px"}>
        <HiddenMenu />
        <SimpleGrid
          spacing={5}
          style={style.listPageLeftColumn}
          columns={style.columns}
          templateColumns={{
            ...style.tempColumns,
          }}
        >
          <Box>
            <Box borderRadius={15} height={"88vh"} width={"100%"}>
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
