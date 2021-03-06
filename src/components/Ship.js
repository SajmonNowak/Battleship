import React, { useState } from "react";
import ShipCell from "./ShipCell";
import { useDrag } from "react-dnd";

const Ship = ({ shipArray, shipData, Gameboard, selectToPosition }) => {
  const [number, setNumber] = useState(shipData.amount);

  const changeNumber = () => {
    setNumber(number - 1);
  };
  const [{ isDragging }, drag] = useDrag({
    type: "ship",
    item: {
      ship: shipArray[number - 1],
      changeNumber: changeNumber,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  let refObject = drag;

  if (number < 1 || Gameboard.getShips().length === 6) {
    refObject = undefined;
  }

  const createShip = () => {
    let x = [];

    for (let i = 0; i < shipArray[0].getLength(); i++) {
      x.push(<ShipCell key={i} />);
    }

    return x;
  };

  return (
    <div>
      <div>{number}</div>
      <div
        ref={refObject}
        onClick={
          number > 0
            ? () => selectToPosition(shipArray[number - 1], changeNumber)
            : undefined
        }
        style={{
          opacity: isDragging ? 0.5 : 1,
          fontSize: 25,
          fontWeight: "bold",
        }}
        className={`ship ${number > 0 ? "moveable" : ""}`}
      >
        {createShip()}
      </div>
    </div>
  );
};

export default Ship;
