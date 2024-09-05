import { Box } from "@chakra-ui/react";
import { listData } from "../data/data";

import useDataStore from "../Zstore/store";
import CardItem from "./CardItem";

export interface CardProp {
  id: number;
  title: string;
  img: string;
  bedroom: number;
  bathroom: number;
  price: number;
  address: string;
  latitude: number;
  longitude: number;
  school: string;
  bus: string;
  size: number;
  images: string[];
  restaurant: string;
  description: string;
}

function HomeCard() {
  const savedItems = useDataStore((select) => select.savedItems);
  const minPrice = useDataStore((select) => select.filterQuery.minPrice);
  const maxPrice =
    useDataStore((select) => select.filterQuery.maxPrice) || 1000000;

  const filteredData = listData
    .filter((item) => item.price > minPrice!)
    .filter((item) => item.price < maxPrice!);

  return (
    <Box>
      {filteredData.map((item) => (
        <CardItem
          isAdded={savedItems.includes(item)}
          card={item}
          key={item.id}
        />
      ))}
    </Box>
  );
}

export default HomeCard;
