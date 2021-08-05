import React from "react";
import Cell from "./Cell";

const Gameboard = ({ player }) => {

  const createGameboard = () => {
    const Gameboard = player.getGameboard();
    const board = Gameboard.getBoard().map((cell, index) => {
      return <Cell key={index} field={cell} coordinates={index} belongsTo={ player.getType()} />;
    })

    return board;
  };

  return <div className="gameBoard">{createGameboard()}</div>;
};

export default Gameboard;
