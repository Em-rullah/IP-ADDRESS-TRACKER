import { useContext, useState } from "react";
import styled from "styled-components";
import { CoordsContext } from "./App";
import getIp from "./getIp";

const FormStyled = styled.form`
  width: 64rem;
  height: 6rem;
  display: flex;
  margin-bottom: 2.4rem;
`;

const InputStyled = styled.input`
  width: 57rem;
  padding: 2.4rem;
  font-size: 1.8rem;
  border: none;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
`;

const ButtonStyled = styled.button`
  width: 7rem;
  background-color: #0a0a0a;
  border: none;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  cursor: pointer;
  transition: all 300ms;
`;

const ImgStyled = styled.img`
  scale: 2.5;

  @media (max-width: 990px) {
    scale: 2;
  }
  @media (max-width: 750px) {
    scale: 1.5;
  }
  @media (max-width: 600px) {
    scale: 1;
  }
`;

function Input() {
  const [value, setValue] = useState("");
  const { setCoords } = useContext(CoordsContext);

  function handleSubmit(e) {
    e.preventDefault();
    (async function () {
      const data = await getIp(value);
      setCoords(data);
    })();
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Search for any IP address"
        type="text"
      />
      <ButtonStyled>
        <ImgStyled src="./icon-arrow.svg" />
      </ButtonStyled>
    </FormStyled>
  );
}

export default Input;
