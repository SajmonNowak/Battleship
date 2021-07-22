import React from "react";
import { useDrop } from "react-dnd";
import isValidPosition from "../helper/isValidPosition";
import isNearbyField from "../helper/isNearbyField";

const ShipSelectionCell = ({ field, coordinates, board, setBoard }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "ship",
    drop: (item, monitor) => {
      const pos = [coordinates, coordinates + 1, coordinates + 2];
      if (isValidPosition(pos, board, isNearbyField)) {
        item.ship.setPosition(pos);
        board.placeShip(item.ship);
        console.log(board.getShips());
        setBoard(board);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`cell ${field.hasShip ? "shipCell" : "waterCell"}${
        isOver ? "isOver" : ""
      }`}
    >
      {isNearbyField(coordinates, board) && <div>x</div>}
    </div>
  );
};

export default ShipSelectionCell;
