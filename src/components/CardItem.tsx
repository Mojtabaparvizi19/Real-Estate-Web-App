import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { CiLocationOn } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import useDataStore from "../Zstore/store";
import bathImage from "../assets/bath.png";
import bedImage from "../assets/bed.png";
import { listData } from "../data/data";
import { CardProp } from "./HomeCard";
import routes from "../router/constants";

interface Prop {
  card: CardProp;
  isAdded?: boolean;
}

function CardItem({ card, isAdded }: Prop) {
  const setSavedItems = useDataStore((select) => select.setSavedItems);
  const isLoggedIn = useDataStore((select) => select.isLogged);
  const setRemoveItem = useDataStore((select) => select.removeItem);

  const path = useLocation().pathname;

  return (
    <div>
      <Card flexDir={"row"} margin={2} padding={2}>
        <Box>
          <Link to={`/list/${card.id}`}>
            <Image borderRadius={10} boxSize={"150px"} src={card.img} />
          </Link>
        </Box>
        <CardBody>
          <Heading as={"h3"} fontSize={"15px"}>
            {card.title}
          </Heading>

          <Text>
            <Badge
              width={"fit-content"}
              display={"flex"}
              padding={2}
              borderRadius={4}
            >
              <CiLocationOn style={{ scale: "1.5", margin: "3px" }} />
              {card.address}
            </Badge>
          </Text>

          <Badge marginBottom={3} colorScheme="yellow">
            {card.price}
          </Badge>

          <HStack justifyContent={"space-between"}>
            <Box>
              <Badge borderRadius={5}>
                <HStack>
                  <Image boxSize={5} src={bedImage} />
                  <Text margin={2}>Bedroom: {card.bedroom}</Text>
                </HStack>
              </Badge>
              <Badge className="ms-2" borderRadius={5}>
                <HStack>
                  <Image boxSize={5} src={bathImage} />
                  <Text margin={2}> Bathroom: {card.bathroom}</Text>
                </HStack>
              </Badge>
            </Box>
            <Box>
              {isLoggedIn && path !== routes.profile && (
                <Button
                  colorScheme={isAdded ? "green" : "gray"}
                  isDisabled={isAdded}
                  onClick={() => {
                    const item = listData.find((item) => item.id === card.id);
                    setSavedItems(item!);
                  }}
                >
                  {isAdded ? "✔" : "add"}
                </Button>
              )}

              {isLoggedIn && path !== routes.list && (
                <Button
                  colorScheme="red"
                  onClick={() => {
                    setRemoveItem(card);
                  }}
                >
                  X
                </Button>
              )}
            </Box>
          </HStack>
        </CardBody>
      </Card>
    </div>
  );
}

export default CardItem;
