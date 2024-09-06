import { Marker, Popup } from "react-leaflet";
import { Image, Box, Text, HStack } from "@chakra-ui/react";
import { CardProp } from "../components/HomeCard";

interface Prop {
  city: CardProp;
}

function PopUp({ city }: Prop) {
  return (
    <div>
      <Marker position={[city.latitude, city.longitude]}>
        <Popup>
          <HStack width={"400px"}>
            <Box>
              <Image
                objectFit={"cover"}
                borderRadius={4}
                boxSize={"105px"}
                src={city.img}
              />
            </Box>
            <Box>
              <Text>{city.address}</Text>
              <HStack>
                <Text>Bath: {city.bathroom}</Text>
                <Text>Bed: {city.bedroom}</Text>
              </HStack>
            </Box>
          </HStack>
        </Popup>
      </Marker>
    </div>
  );
}

export default PopUp;
