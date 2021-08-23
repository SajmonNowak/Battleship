import styled from "styled-components";

const GameoverModal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 50px;
  color: white;
  background-color: #006494;

  button {
    margin-top: 20px;
    width: 200px;
    height: 50px;
  }

  @media (max-width: 650px){
    font-size: 26px;
  }
`;

export default GameoverModal;
