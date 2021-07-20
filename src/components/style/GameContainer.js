import styled from "styled-components";

export const GameContainer = styled.div`
  position: relative;
  border: 1px solid;
  padding: 50px;
  display: flex;
  justify-content: space-around;

  .gameBoard {
    width: 500px;
    height: 500px;
    border: 1px solid;
    display: flex;
    flex-wrap: wrap;
    box-sizing: content-box;
  }

  .cell {
    width: 50px;
    height: 50px;
    border: 1px solid;
  }

  .waterCell {
      background-color: blue;
  }

  .shipCell {
      background-color: red;
  }

  .shotCell {
      font-size: 50px;
      text-align: center;
      color: white;
  }

  .shipCell .shotCell {
      color: black;
  }

`;
