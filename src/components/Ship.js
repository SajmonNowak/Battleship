import React, { useState } from "react";
import ShipCell from "./ShipCell";
import { useDrag } from "react-dnd";

const Ship = ({ shipArray, shipData }) => {
  const [number, setNumber] = useState(shipData.amount);

  const changeNumber = () => {
    setNumber(number - 1);
  };

  const [{ isDragging }, drag] = useDrag({
    type: "ship",
    item: {
      ship: shipArray[number-1],
      changeNumber: changeNumber,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const createShip = () => {
    let x = [];

    for (let i = 0; i < shipArray[0].getLength(); i++) {
      x.push(<ShipCell key={i} />);
    }

    return x;
  };

  let refObject = drag;

  if( number < 1){
    refObject = undefined
  }

  return (
    <div>
      <div>{number}</div>
      <div
        ref= {refObject}
        style={{
          opacity: isDragging ? 0.5 : 1,
          fontSize: 25,
          fontWeight: "bold",
          cursor: "move",
        }}
        className="ship"
      >
        {createShip()}
      </div>
    </div>
  );
};

export default Ship;
