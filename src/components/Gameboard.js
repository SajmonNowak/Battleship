import React from "react";
import Cell from "./Cell";
import { ScoreBoard } from "./style/ScoreBoard";

const Gameboard = ({ player }) => {
  const Gameboard = player.getGameboard();
  const createGameboard = () => {
    const board = Gameboard.getBoard().map((cell, index) => {
      return (
        <Cell
          key={index}
          field={cell}
          coordinates={index}
          belongsTo={player.getType()}
        />
      );
    });

    return board;
  };

  return (
    <div className="gameBoard">
      {createGameboard()}
      <ScoreBoard>{Gameboard.getShipCount()} ships left</ScoreBoard>
    </div>
  );
};

export default Gameboard;
