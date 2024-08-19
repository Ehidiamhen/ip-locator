import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import icon from './assets/icon-location.svg'

const customIcon = new L.Icon({
    iconUrl: icon,
    // iconSize: [38, 38], // Adjust icon size
    // iconAnchor: [19, 38], // Adjust anchor to point the icon correctly
    // popupAnchor: [0, -38], // Adjust popup position
});

export default function Map() {
  return (
    <>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: "100vh", width: "100%", outline: 'red'}}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.09]} icon={customIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}
