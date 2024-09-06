import { CardProp } from "../HomeCard";
import {
  Box,
  Image,
  SimpleGrid,
  Badge,
  HStack,
  Text,
  Heading,
} from "@chakra-ui/react";
import DescriptionShortener from "../DescriptionShortener";
import bed from "../../assets/bed.png";
import bath from "../../assets/bath.png";

interface Prop {
  item: CardProp;
}

function Details({ item }: Prop) {
  return (
    <Box borderRadius={15} height={"100%"}>
      <Box>
        <SimpleGrid
          columns={1}
          borderRadius={10}
          display={"flex"}
          overflow={"hidden"}
          className="left-grid-detail"
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
          <Box maxW={"180px"} width={"35%"}>
            {item.images.map((img, index) => (
              <Image
                objectFit={"cover"}
                height={"30%"}
                width={"95%"}
                margin={2}
                borderRadius={10}
                key={index}
                src={img}
              />
            ))}
          </Box>
        </SimpleGrid>
      </Box>

      <Box className="mt-5 ">
        <Heading fontSize={"25px"}>{item.title}</Heading>
        <HStack justifyContent={"space-between"}>
          <Box className="details">
            <Badge margin={2} padding={2} borderRadius={4}>
              {item.address}
            </Badge>

            <Badge margin={2} borderRadius={4}>
              <HStack>
                <Image boxSize={"15px"} src={bed} />
                <Text margin={2}>Bed: {item.bedroom}</Text>
              </HStack>
            </Badge>
            <Badge margin={2} borderRadius={4}>
              <HStack>
                <Image boxSize={"15px"} src={bath} />
                <Text margin={2}>Bath: {item.bathroom}</Text>
              </HStack>
            </Badge>
            <Badge
              margin={2}
              fontSize={"20px"}
              colorScheme="yellow"
              borderRadius={5}
              padding={2}
              marginRight={"120px"}
            >
              ${item.price}
            </Badge>
          </Box>
        </HStack>
      </Box>

      <Box borderRadius={10} marginTop={"50px"} padding={2}>
        <Text>Description:</Text>
        <DescriptionShortener>{item.description}</DescriptionShortener>
      </Box>
    </Box>
  );
}

export default Details;
