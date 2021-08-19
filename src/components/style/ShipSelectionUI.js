import styled from "styled-components";

const ShipSelectionUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .shipList {
    margin-left: 50px;
  }

  .ship {
    display: flex;
    flex-direction: row;
    margin: 20px;
  }

  .moveable {
    cursor: move;
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

  .buttonContainer {
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
  }

  .randomButton {
    width: 150px;
  }

  .playButton {
    margin-left: 50px;
    width: 400px;
    height: 50px;
    font-weight: bold;

    &.deactivated {
      background-color: grey;
    }

    &.active {
      &:hover {
        background-color: #ff8800;
      }
    }

    &:hover {
      background-color: none;
    }
  }
`;

export default ShipSelectionUI;
