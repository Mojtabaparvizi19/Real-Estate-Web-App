import { Badge, Box, HStack, Heading, Text } from "@chakra-ui/react";

import { listData } from "../../data/data";
import Map from "../../map/Map";
import { useParams } from "react-router-dom";
import SinglePopup from "./SinglePopup";

function General() {
  const id = parseInt(useParams().id!);
  const data = listData.find((item) => item.id === id);
  if (data)
    return (
      <>
        <Heading fontSize={"20px"} margin={2}>
          General
        </Heading>
        <Box padding={2} display={"flex"} placeContent={"center"}>
          <Box padding={2} borderRadius={10} height={"100%"} width={"100%"}>
            <Text>Utilities</Text>

            <Text>Pet Policies</Text>
            <Text></Text>

            <Text>Property Fees</Text>
          </Box>
        </Box>
        <Heading fontSize={"20px"} margin={2} marginTop={"50px"}>
          Room Sizes
        </Heading>

        <HStack padding={2} justifyContent={"space-between"}>
          <Badge borderRightRadius={4} padding={2}>
            {data.size} sq.f
          </Badge>
          <Badge borderRightRadius={4} padding={2}>
            {data.bedroom} Bed
          </Badge>
          <Badge borderRightRadius={4} padding={2}>
            {data.bathroom} Bath
          </Badge>
        </HStack>

        <Heading fontSize={"20px"} margin={2} marginTop={"50px"}>
          Nearby Places
        </Heading>
        <HStack borderRadius={10} justifyContent={"space-between"}>
          <Box padding={3}>
            <Text margin={0}>School</Text>
            <Badge
              padding={2}
              borderRadius={5}
              colorScheme="green"
              fontSize={"12px"}
            >
              {data.school}
            </Badge>
          </Box>
          <Box padding={3}>
            <Text margin={0}>Bus Stop</Text>
            <Badge
              padding={2}
              borderRadius={5}
              colorScheme="green"
              fontSize={"12px"}
            >
              {data.bus}
            </Badge>
          </Box>
          <Box padding={3}>
            <Text margin={0}>Restaurant</Text>
            <Badge
              padding={2}
              borderRadius={5}
              colorScheme="green"
              fontSize={"12px"}
            >
              {data.restaurant}
            </Badge>
          </Box>
        </HStack>
        <Heading fontSize={"20px"} margin={2} marginTop={"50px"}>
          Location
        </Heading>
        <Box marginTop={"20px"}>
          <Map city={[data.latitude, data.longitude]} height="500px">
            <SinglePopup city={data} />
          </Map>
        </Box>
      </>
    );
}

export default General;
