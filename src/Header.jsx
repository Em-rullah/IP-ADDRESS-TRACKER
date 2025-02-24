import styled from "styled-components";
import Info from "./Info";
import Input from "./Input";

const HeaderStyled = styled.header`
  padding-top: 2rem;
  display: flex;
  gap: 3.2rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-image: url(./pattern-bg-desktop.png);

  @media (max-width: 660px) {
    gap: 1rem;
  }
`;

const H1Styled = styled.h1`
  color: #fafafa;
  font-size: 4.8rem;
  font-weight: 500;
  text-align: center;
`;

function Header() {
  return (
    <HeaderStyled>
      <H1Styled>IP Address Tracker</H1Styled>
      <Input />
      <Info />
    </HeaderStyled>
  );
}

export default Header;
