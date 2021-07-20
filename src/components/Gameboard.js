import React from "react";
import Cell from "./Cell";

const Gameboard = ({ player }) => {

  const createGameboard = () => {
    const board = player.getBoard();
    const Gameboard = board.getBoard().map((cell, index) => {
      return <Cell key={index} field={cell} coordinates={index} belongsTo={player.getType()} />;
    })

    return Gameboard;
  };

  return <div className="gameBoard">{createGameboard()}</div>;
};

export default Gameboard;
