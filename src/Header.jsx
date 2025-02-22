import styled from "styled-components";
import Info from "./Info";
import Input from "./Input";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-image: url(./pattern-bg-desktop.png);
`;

const H1Styled = styled.h1`
  color: #fafafa;
  font-size: 4.8rem;
  font-weight: 500;
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
