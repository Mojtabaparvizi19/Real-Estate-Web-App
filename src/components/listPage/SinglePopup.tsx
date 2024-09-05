import { Marker, Popup } from "react-leaflet";

interface SingleCity {
  city: InfoProp;
}

interface InfoProp {
  latitude: number;
  longitude: number;
}

function SinglePopup({ city }: SingleCity) {
  return (
    <div>
      <Marker position={[city.latitude, city.longitude]}>
        <Popup>hello</Popup>
      </Marker>
    </div>
  );
}

export default SinglePopup;
