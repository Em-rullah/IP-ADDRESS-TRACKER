/* eslint-disable react/prop-types */
import styled from "styled-components";

const LiStyled = styled.li`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1.2rem;
  padding-right: 1.2rem;

  &:not(:last-child) {
    border-right: 1px solid #a3a3a3;
  }
`;
const H2Styled = styled.h2`
  color: #404040;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 1px;

  @media (max-width: 660px) {
    width: 80%;
    font-size: 1.2rem;
  }
`;
const PStyled = styled.p`
  word-break: break-all;
  font-size: 2.8rem;
  font-weight: 500;

  @media (max-width: 660px) {
    width: 80%;
    font-size: 1.8rem;
  }
`;

function InfoItem({ caption, content }) {
  return (
    <LiStyled>
      <H2Styled>{caption}</H2Styled>
      <PStyled>{content || "-"}</PStyled>
    </LiStyled>
  );
}

export default InfoItem;
