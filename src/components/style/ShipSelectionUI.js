import styled from "styled-components";

const ShipSelectionUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


  .shipSelectionCell {
    background-color: red;
    width: 50px;
    height: 50px;
    border: 1px solid;
    cursor: move;
  }

  .shipList {
    margin-left: 50px;
  }

  .ship {
    display: flex;
    flex-direction: row;
    margin: 20px;
  }

  .isOver {
    position: "absolute";
    top: 0;
    left: 0;
    height: "100%";
    width: "100%";
    z-index: 1;
    opacity: 0.5;
    background-color: "yellow";
  }

  .mainUI {
    display: flex;
    justify-content: center;
  }

  .playButton {
    margin-top: 50px;;
    width: 400px;
    height: 50px;
  
    &.deactivated {
      background-color: grey;
    }

    &.active {
      background-color: lightblue;
    }
  }

`;

export default ShipSelectionUI;
