import {
  SimpleGrid,
  Box,
  Heading,
  Badge,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { listData } from "../../data/data";
import bed from "../../assets/bed.png";
import bath from "../../assets/bath.png";
import DescriptionShortener from "../DescriptionShortener";
import General from "./General";
import { useParams } from "react-router-dom";
import HiddenMenu from "../HiddenMenu";

function DetailPage() {
  const id = parseInt(useParams().id!);

  const item = listData.find((item) => item.id === id);

  if (item)
    return (
      <div>
        <HiddenMenu />
        <SimpleGrid
          padding={3}
          columns={{
            base: 1,
            md: 2,
          }}
          templateColumns={{
            base: "1fr",
            md: "2fr 1fr",
          }}
          spacing={2}
        >
          <Box borderRadius={15} height={"100%"}>
            <Box>
              <SimpleGrid
                columns={1}
                borderRadius={10}
                display={"flex"}
                overflow={"hidden"}
                height={"600px"}
              >
                <Box width={"65%"}>
                  <Image
                    borderRadius={10}
                    width={"100%"}
                    height={"100%"}
                    objectFit={"cover"}
                    src={item.img}
                  />
                </Box>
                <Box maxW={"200px"} width={"35%"}>
                  {item.images.map((img, index) => (
                    <Image
                      height={"32%"}
                      width={"100%"}
                      margin={2}
                      borderRadius={10}
                      key={index}
                      src={img}
                    />
                  ))}
                </Box>
              </SimpleGrid>
            </Box>

            <Box className="mt-5">
              <Heading>{item.title}</Heading>
              <HStack justifyContent={"space-between"}>
                <HStack>
                  <Badge padding={2} borderRadius={4}>
                    {item.address}
                  </Badge>

                  <Badge borderRadius={4}>
                    <HStack>
                      <Image boxSize={"15px"} src={bed} />
                      <Text margin={2}>Bed: {item.bedroom}</Text>
                    </HStack>
                  </Badge>
                  <Badge borderRadius={4}>
                    <HStack>
                      <Image boxSize={"15px"} src={bath} />
                      <Text margin={2}>Bath: {item.bathroom}</Text>
                    </HStack>
                  </Badge>
                </HStack>

                <Badge
                  fontSize={"20px"}
                  colorScheme="yellow"
                  borderRadius={5}
                  padding={2}
                  marginRight={"120px"}
                >
                  ${item.price}
                </Badge>
              </HStack>
            </Box>

            <Box borderRadius={10} marginTop={"50px"} padding={2}>
              <Text>Description:</Text>
              <DescriptionShortener>{item.description}</DescriptionShortener>
            </Box>
          </Box>

          <Box
            backgroundColor={"rgb(204,255,255, 0.3)"}
            padding={3}
            borderRadius={10}
            height={"auto"}
          >
            <General />
          </Box>
        </SimpleGrid>
      </div>
    );
}

export default DetailPage;
