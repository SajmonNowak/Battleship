import { ACTIONS } from "../Controller";

const humanTurn = (player, ai, coordinate, dispatch) => {
  const board = ai.getBoard();
  board.receiveAttack(coordinate);

  if (board.getField(coordinate).hasShip) {
    checkIfFatal(board, coordinate, dispatch);
    checkIfWin(board, player, dispatch);
  }

  aiTurn(player, dispatch);
};

const aiTurn = (player, dispatch ) => {
    const board = player.getBoard();
    const randomNumber = Math.floor(Math.random()*99)
    board.receiveAttack(randomNumber);
}

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
    const winner = player.getType() 
    console.log(winner);
    dispatch({
        type: ACTIONS.CHANGE_PHASE,
        payload: "End",
      });
    dispatch ({
        type: ACTIONS.SET_WINNER,
        payload: winner,
    })
      
  }
};

const revealNearbyCells = (board, coordinate) => {
  const ship = board.getField(coordinate).hasShip;
  ship.getNearbyCoordinates().forEach((e) => board.receiveAttack(e));
};

export default humanTurn;
