import { Box, SimpleGrid } from "@chakra-ui/react";
import { listData } from "../../data/data";

import { useParams } from "react-router-dom";
import HiddenMenu from "../HiddenMenu";
import General from "./General";
import Details from "./Details";
import style from "../../style/style";

function DetailPage() {
  const id = parseInt(useParams().id!);

  const item = listData.find((item) => item.id === id);

  if (item)
    return (
      <Box padding={2} width={"100%"} maxW={"1400px"}>
        <HiddenMenu />
        <SimpleGrid
          // padding={"30px"}
          columns={style.columns}
          templateColumns={{
            ...style.tempColumns,
          }}
          spacing={2}
        >
          <Details item={item} />

          <Box
            backgroundColor={"rgb(204,255,255, 0.06)"}
            padding={3}
            borderRadius={10}
            height={"auto"}
          >
            <General />
          </Box>
        </SimpleGrid>
      </Box>
    );
}

export default DetailPage;
