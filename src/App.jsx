import styled from "styled-components";
import Header from "./Header";
import Map from "./Map";
import { createContext, useEffect, useState } from "react";
import Spinner from "./Spinner";
import getIp from "./getIp";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 30% 70%;
`;

const StyledError = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  font-weight: bold;
`;

export const CoordsContext = createContext();

function App() {
  const [coords, setCoords] = useState();
  useEffect(function () {
    (async function () {
      const data = await getIp();
      setCoords(data);
    })();
  }, []);

  if (!coords) return <Spinner />;
  return (
    <Container>
      <CoordsContext.Provider
        value={{
          coords,
          setCoords,
        }}
      >
        <Header />
        {coords.status === "fail" ? (
          <StyledError>Wrong ip/domain</StyledError>
        ) : (
          <Map />
        )}
      </CoordsContext.Provider>
    </Container>
  );
}

export default App;
