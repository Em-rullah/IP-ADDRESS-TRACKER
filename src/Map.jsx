import { useContext, useEffect } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import { CoordsContext } from "./App";
import styled from "styled-components";

const StyledMap = styled(MapContainer)`
  z-index: 1;
`;

function SetView({ coords }) {
  const map = useMap();

  useEffect(() => {
    map.setView([coords.latitude, coords.longitude]);
  }, [coords, map]);

  return null;
}

function Map() {
  const { coords } = useContext(CoordsContext);
  console.log(coords);
  return (
    <StyledMap
      center={[coords.latitude, coords.longitude]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[coords.latitude, coords.longitude]} />
      <SetView coords={coords} />
    </StyledMap>
  );
}
export default Map;
