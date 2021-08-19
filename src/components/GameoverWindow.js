import React from "react";
import GameoverModal from "./style/GameoverModal";
import { ACTIONS } from "../Controller";

const GameoverWindow = ({ winner, dispatch }) => {
  const restartGame = () => {
    dispatch({
      type: ACTIONS.RESTART_GAME,
    });
  };

  return (
    <GameoverModal>
      <h2>{winner} wins</h2>
      <button className="button" onClick={restartGame}>
        Play again!
      </button>
    </GameoverModal>
  );
};

export default GameoverWindow;
