import styled from "styled-components";

export const GameContainer = styled.div`
  position: relative;
  padding: 50px;

  .gameboardsContainer {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
  }

  .gameBoard {
    width: 500px;
    height: 500px;
    border: 1px solid;
    display: flex;
    flex-wrap: wrap;
    box-sizing: content-box;
    border: 3px solid black;
  }

  .button {
    font-size: 20px;
    background-color: #e67a00;
    font-weight: bold;
    height: 50px;
    border: 3px solid black;

    &:hover {
      background-color: #ff8800;
    }
  }

  @media (max-width: 1135px) {
    .gameBoard {
      width: 250px;
      height: 250px;
    }
  }
`;
