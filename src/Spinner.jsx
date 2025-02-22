import styled from "styled-components";

const StyledSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: conic-gradient(#3498db 0%, #f3f3f3 100%);
  mask: radial-gradient(circle, transparent 40%, black 41%);
  -webkit-mask: radial-gradient(circle, transparent 40%, black 41%);
  animation: spin 1.5s ease-in-out infinite;

  @keyframes spin {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

function Spinner() {
  return <StyledSpinner />;
}

export default Spinner;
