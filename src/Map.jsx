import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import icon from './assets/icon-location.svg'
import { useEffect } from "react";

const customIcon = new L.Icon({
    iconUrl: icon
});

const RecenterMap = ({lat, lng}) => {
  const map = useMap()

  useEffect(() => {
    if (lat && lng) {
      map.setView([lat, lng], map.getZoom())
    }
  }, [lat, lng, map])

  return null
}

export default function Map({ data }) {
  console.log('MAPDATA', data)
  return (
    <>
      <MapContainer
        center={[data?.latitude, data?.longitude]}
        zoom={13}
        style={{ height: "80vh", width: "100%", outline: 'red'}}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[data?.latitude, data?.longitude]} icon={customIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <RecenterMap lat={data?.latitude} lng={data?.longitude} />
      </MapContainer>
    </>
  );
}
