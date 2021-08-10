import React from "react";
import { useDrop } from "react-dnd";
import isValidPosition from "../helper/isValidPosition";
import isNearbyField from "../helper/isNearbyField";
import { useDrag } from "react-dnd";

const ShipSelectionCell = ({ field, coordinates, board, render }) => {

  const calculateNewPosition = (alignment, length) => {
    let pos = [];
    if (alignment === "horizontal") {
      for (let i = 0; i < length; i++) {
        pos.push(coordinates + i);
      }
    } else {
      for (let i = 0; i < length; i++) {
        pos.push(coordinates + i * 10);
      }
    }

    return pos;
  };

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ["ship", "cell"],
    canDrop: (item) => {
      let pos = calculateNewPosition(
        item.ship.getAlignment(),
        item.ship.getLength()
      );

      return isValidPosition(pos, board, item.ship.getAlignment(), item.ship);
    },
    drop: (item, monitor) => {
      let pos = calculateNewPosition(
        item.ship.getAlignment(),
        item.ship.getLength()
      );
        if(item.shipIsOnField !== undefined){
          board.replaceShip(item.ship, pos)
          console.log("replace")
        } else {
          item.ship.setPosition(pos);
          board.placeShip(item.ship);
        }

      render();
      if (item.changeNumber) {
        item.changeNumber();
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  const [{ isDragging }, drag] = useDrag({
    type: "cell",
    item: {
      ship: board.getField(coordinates).hasShip,
      shipIsOnField: true,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  let ref = drop;

  if (board.getField(coordinates).hasShip) {
    ref = drag;
  }

  const rotateShip = () => {
    let clickedShip = board.getField(coordinates).hasShip;
    clickedShip.rotate(board);
    board.replaceShip(clickedShip, clickedShip.getPosition());
    render()
  };

  return (
    <div
      ref={ref}
      className={`cell ${field.hasShip ? "shipSelectionCell" : "waterCell"}${
        isOver ? "isOver" : ""
      }`}
      style={{
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: !canDrop ? "" : isOver ? "green" : "",
      }}
      onClick={field.hasShip ? rotateShip : undefined}
    >
      {isNearbyField(coordinates, board) && <div>x</div>}
    </div>
  );
};

export default ShipSelectionCell;
