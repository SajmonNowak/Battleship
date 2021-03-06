import { ACTIONS } from "../Controller";
import nextTurn from "./nextTurn";

let didHit = false;

const aiTurn = (player, ai, dispatch) => {
  const Gameboard = player.getGameboard();

  if (hittedShipOnBoard(Gameboard)) {
    hitNaerbyFieldOfShip(Gameboard);
  } else {
    hitRandomPosition(Gameboard);
  }

  if (checkIfWin(Gameboard, dispatch)) {
    return;
  } else {
    nextTurn(didHit ? "ai" : "player", player, ai, dispatch);
  }
};

const hittedShipOnBoard = (Gameboard) => {
  const hittedShip = Gameboard.getShips().find(
    (ship) => ship.getHits().length > 0 && !ship.isSunk()
  );

  if (hittedShip) {
    return hittedShip;
  } else {
    return false;
  }
};

const hitRandomPosition = (Gameboard) => {
  let unHittedFields = [];
  Gameboard.getBoard().forEach((field, index) => {
    if (field.isHitted === false) {
      unHittedFields.push(index);
    }
  });
  const attackCoordinate = getRandomPosition(Gameboard, unHittedFields);
  Gameboard.receiveAttack(attackCoordinate);
  updateHitted(Gameboard, attackCoordinate);
};

const getRandomPosition = (Gameboard, unHittedFields) => {
  let randomNumber = Math.floor(Math.random() * (unHittedFields.length - 1));
  let pos = unHittedFields[randomNumber];
  if (isLonelyField(Gameboard, unHittedFields, pos)) {
    return getRandomPosition(Gameboard, unHittedFields);
  }
  return pos;
};

const isLonelyField = (Gameboard, unHittedFields, pos) => {
  let nextCells = [-10, -1, +1, +10];
  if (pos < 10) {
    nextCells = [-1, +1, +10];
  }
  if (pos > 89) {
    nextCells = [-10, -1, +1];
  }
  if (pos === 0) {
    nextCells = [+1, +10];
  }
  if (pos === 99) {
    nextCells = [-1, -10];
  }

  if (
    nextCells.every(
      (nextCellPos) => Gameboard.getField(pos + nextCellPos).isHitted
    )
  ) {
    return true;
  }
  return false;
};

const hitNaerbyFieldOfShip = (Gameboard) => {
  const hittedShip = hittedShipOnBoard(Gameboard);
  const hittedPositions = hittedShip.getHits().sort((a, b) => a - b);
  const alignment = hittedShip.getAlignment();
  if (alignment === "horizontal") {
    attackHorizontally(Gameboard, hittedPositions, alignment);
  } else {
    attackVertically(Gameboard, hittedPositions, alignment);
  }
  handlePlayerShipDestroyed(Gameboard, hittedShip);
};

const attackHorizontally = (Gameboard, hittedPositions, alignment) => {
  const posBeforeHit = hittedPositions[0] - 1;
  const posAfterHit = hittedPositions[hittedPositions.length - 1] + 1;
  if (isValidAttack(posBeforeHit, Gameboard, alignment)) {
    Gameboard.receiveAttack(posBeforeHit);
    updateHitted(Gameboard, posBeforeHit);
  } else {
    Gameboard.receiveAttack(posAfterHit);
    updateHitted(Gameboard, posAfterHit);
  }
};

const attackVertically = (Gameboard, hittedPositions, alignment) => {
  const posBeforeHit = hittedPositions[0] - 10;
  const posAfterHit = hittedPositions[hittedPositions.length - 1] + 10;

  if (isValidAttack(posBeforeHit, Gameboard, alignment)) {
    Gameboard.receiveAttack(posBeforeHit);
    updateHitted(Gameboard, posBeforeHit);
  } else {
    Gameboard.receiveAttack(posAfterHit);
    updateHitted(Gameboard, posAfterHit);
  }
};

const isValidAttack = (coordinate, Gameboard, alignment) => {
  const fieldToHit = Gameboard.getField(coordinate);

  if (
    checkIfNotOnBoard(coordinate) ||
    fieldToHit.isHitted ||
    inBreak(coordinate, alignment)
  ) {
    return false;
  }
  return true;
};

const checkIfNotOnBoard = (coordinate) => {
  if (coordinate < 0 || coordinate > 99) {
    return true;
  }
  return false;
};

const inBreak = (coordinate, alignment) => {
  if (alignment === "horizontal") {
    let x = parseInt(coordinate / 10, 10) * 10;
    let y = parseInt((coordinate + 1) / 10, 10) * 10;
    if (y > x) {
      return true;
    }
  }

  return false;
};

const handlePlayerShipDestroyed = (Gameboard, ship) => {
  if (ship.isSunk()) {
    revealNearbyCells(Gameboard, ship.getPosition()[0]);
  }
};

const revealNearbyCells = (board, coordinate) => {
  const ship = board.getField(coordinate).hasShip;
  ship.getNearbyCoordinates().forEach((e) => board.receiveAttack(e));
};

const updateHitted = (Gameboard, field) => {
  if (Gameboard.getField(field).hasShip) {
    didHit = true;
  } else {
    didHit = false;
  }
};

const checkIfWin = (Gameboard, dispatch) => {
  if (Gameboard.checkIfAllDestroyed()) {
    dispatch({
      type: ACTIONS.CHANGE_PHASE,
      payload: "End",
    });
    dispatch({
      type: ACTIONS.SET_WINNER,
      payload: "Computer",
    });
    return true;
  }
};

export default aiTurn;
