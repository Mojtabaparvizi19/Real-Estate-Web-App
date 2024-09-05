import { Box } from "@chakra-ui/react";
import "leaflet/dist/leaflet.css";
import { ReactNode } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { CardProp } from "../components/HomeCard";
import PopUp from "./PopUp";

interface DataProp {
  data?: CardProp[];
  height: string;
  children?: ReactNode;
  city?: [number, number];
}

function Map({ data, height, children, city }: DataProp) {
  return (
    <Box>
      <MapContainer
        style={{ height }}
        center={data ? [data[0].latitude, data[0].longitude] : city}
        zoom={7}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {data?.map((card, index) => (
          <PopUp key={index} city={card} />
        ))}
        {children}
      </MapContainer>
    </Box>
  );
}

export default Map;
