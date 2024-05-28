import { useRef } from "react";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const mapRef = useRef(null);
  const latitude = 40.7363945;
  const longitude = -74.0586581;
  // const locationInfo = {
  //   mapLat:40.7363945,
  //   mapLng:-74.0586581,
  //   mapZoom:12,
  //   addressLine1:"634 Summit ave",
  //   addressLine2: "Jersey City, NJ",
  //   addressCountry:"United States",
  //   addressTitle: "Highrise Construction",
  // }
  return (
      <MapContainer
        ref={mapRef}
        center={[latitude, longitude]}
        zoom={12}
        scrollWheelZoom={false}
        style={{ height: "320px", width: "100%" }}
        zoomControl={false}
      >
        <TileLayer
          attribution=''
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
            key={"634 Summit ave Jersey City, NJ, United States"}
            position={[latitude, longitude]}
          >
            <Tooltip>"Highrise Construction"</Tooltip>
        </Marker>
      </MapContainer>
  );
};

export default Map;