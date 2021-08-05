import { ACTIONS } from "../Controller";

const humanTurn = (player, ai, coordinate, dispatch) => {
  const Gameboard = ai.getGameboard();
  Gameboard.receiveAttack(coordinate);

  if (Gameboard.getField(coordinate).hasShip) {
    checkIfFatal(Gameboard, coordinate, dispatch);
    checkIfWin(Gameboard, player, dispatch);
  }

  aiTurn(player, dispatch);
};

const aiTurn = (player, dispatch) => {
  const Gameboard = player.getGameboard();
  let unHittedFields = [];
  Gameboard.getBoard().forEach((field, index) => {
    if (field.isHitted === false) {
      unHittedFields.push(index);
    }
  });
  const randomNumber = Math.floor(Math.random() * (unHittedFields.length - 1));
  Gameboard.receiveAttack(unHittedFields[randomNumber]);
};

const checkIfFatal = (board, coordinate, dispatch) => {
  if (board.checkIfSunk(coordinate)) {
    dispatch({
      type: ACTIONS.SET_MESSAGE,
      payload: "You destroyed enemy's Ship",
    });
    revealNearbyCells(board, coordinate);
  }
};

const checkIfWin = (board, player, dispatch) => {
  if (board.checkIfAllDestroyed()) {
    const winner = player.getType();
    console.log(winner);
    dispatch({
      type: ACTIONS.CHANGE_PHASE,
      payload: "End",
    });
    dispatch({
      type: ACTIONS.SET_WINNER,
      payload: winner,
    });
  }
};

const revealNearbyCells = (board, coordinate) => {
  const ship = board.getField(coordinate).hasShip;
  ship.getNearbyCoordinates().forEach((e) => board.receiveAttack(e));
};

export default humanTurn;
