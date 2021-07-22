import React from "react";
import ShipCell from "./ShipCell";
import { useDrag } from "react-dnd";

const Ship = ({ ship, id }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "ship",
    item : {
    ship: ship,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const createShip = () => {
    let x = [];
  
    for (let i = 0; i < ship.getLength(); i++) {
      x.push(<ShipCell key={i} />);
    }

    return x;
  };

  return (
    <div
      ref={drag}
      id= {id}
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
  );
};

export default Ship;
