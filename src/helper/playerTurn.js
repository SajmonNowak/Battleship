import { ACTIONS } from "../Controller";
import nextTurn from "./nextTurn";

const playerTurn = (player, ai, coordinate, dispatch) => {
  const Gameboard = ai.getGameboard();
  Gameboard.receiveAttack(coordinate);

  if (Gameboard.getField(coordinate).hasShip) {
    checkIfFatal(Gameboard, coordinate);
    checkIfWin(Gameboard, dispatch);
    nextTurn("player", player, ai, dispatch);
  } else {
    nextTurn("ai", player, ai, dispatch);
  }
};

const checkIfFatal = (board, coordinate) => {
  if (board.getField(coordinate).hasShip.isSunk()) {
    revealNearbyCells(board, coordinate);
  }
};

const checkIfWin = (board, dispatch) => {
  if (board.checkIfAllDestroyed()) {
    dispatch({
      type: ACTIONS.CHANGE_PHASE,
      payload: "End",
    });
    dispatch({
      type: ACTIONS.SET_WINNER,
      payload: "player",
    });
  }
};

const revealNearbyCells = (board, coordinate) => {
  const ship = board.getField(coordinate).hasShip;
  ship.getNearbyCoordinates().forEach((e) => board.receiveAttack(e));
};

export default playerTurn;
