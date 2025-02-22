import styled from "styled-components";
import InfoItem from "./InfoItem";
import { useContext } from "react";
import { CoordsContext } from "./App";

const UlStyled = styled.ul`
  position: absolute;
  top: 25%;
  z-index: 2;
  max-width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.2rem;
  list-style: none;
  background-color: #fafafa;
  padding: 2.4rem 2.4rem;
  border-radius: 1rem;
  /* transform: translateY(5rem); */
`;

function Info() {
  const { coords } = useContext(CoordsContext);

  return (
    <UlStyled>
      <InfoItem
        caption={"IP LOCATION"}
        content={coords.status === "fail" ? "" : coords?.query}
      />
      <InfoItem
        caption={"LOCATION"}
        content={
          coords.status === "fail"
            ? ""
            : `${coords?.city}, ${coords?.countryCode}, ${coords?.zip}`
        }
      />
      <InfoItem caption={"TIMEZONE"} content={coords?.timezone} />
      <InfoItem caption={"ISP"} content={coords?.isp} />
    </UlStyled>
  );
}

export default Info;
