import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import newIcon from "../../assets/free-location-icon-2955-thumb.png";

interface SingleCity {
  city: InfoProp;
}

interface InfoProp {
  latitude: number;
  longitude: number;
}

function SinglePopup({ city }: SingleCity) {
  const icon = new L.Icon({
    iconUrl: newIcon,
    iconSize: [35, 35],
  });
  return (
    <div>
      <Marker icon={icon} position={[city.latitude, city.longitude]}>
        <Popup>It is here</Popup>
      </Marker>
    </div>
  );
}

export default SinglePopup;
