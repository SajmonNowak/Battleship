import React, { useState, useContext } from "react";
import { useDrop } from 'react-dnd'

const ShipSelectionCell = ({ field, coordinates, board }) => {

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ship",
    drop: () => board.placeShip(coordinates),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  return (
    <div ref={drop} className={`cell ${field.hasShip ? "shipCell" : "waterCell"}`}>
    </div>
  );
};

export default ShipSelectionCell;
