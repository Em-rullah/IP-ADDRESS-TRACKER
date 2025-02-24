import styled from "styled-components";
import InfoItem from "./InfoItem";
import { useContext } from "react";
import { CoordsContext } from "./App";

const UlStyled = styled.ul`
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
  list-style: none;
  background-color: #fafafa;
  padding: 2.4rem 2.4rem;
  border-radius: 1rem;
  width: 90%;
`;

function Info() {
  const { coords } = useContext(CoordsContext);

  return (
    <UlStyled>
      <InfoItem caption={"IP LOCATION"} content={coords.ipAddress} />
      <InfoItem
        caption={"LOCATION"}
        content={
          coords.cityName
            ? `${coords.cityName}, ${coords.countryCode}, ${coords.zipCode}`
            : ""
        }
      />
      <InfoItem caption={"TIMEZONE"} content={coords.timeZones[0]} />
    </UlStyled>
  );
}

export default Info;
