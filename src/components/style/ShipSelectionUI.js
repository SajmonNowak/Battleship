import styled from "styled-components";

const ShipSelectionUI = styled.div`
  display: flex;
  flex-direction: row;

  .shipCell {
    width: 50px;
    height: 50px;
    border: 1px solid;
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
`;

export default ShipSelectionUI;
