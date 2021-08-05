import GameboardFactory from "../factories/GameboardFactory";
import isNearbyField from "./isNearbyField";

const isValidPosition = (pos, board, alignment, ship) => {
  let controlBoard = GameboardFactory();

  controlBoard.placeShips(board.getShips());


  if (ship !== undefined ) {
    ship.getPosition().forEach((coord) => (controlBoard.getField(coord).hasShip = false));
  }

  if (
    inBreak(pos, alignment) ||
    onNearbyField(pos, board, ship) ||
    hasShipOnPosition(pos, controlBoard)
  ) {
    return false;
  }
  return true;
};

const hasShipOnPosition = (pos, board) => {
  const hasShip = pos.some((coord) => board.getField(coord).hasShip);
  return hasShip;
};

const inBreak = (pos, alignment) => {
  if (alignment === "horizontal") {
    let x = parseInt(pos[0] / 10, 10) * 10;
    let y = parseInt(pos[pos.length - 1] / 10, 10) * 10;
    if (y > x) {
      return true;
    }
  }
  if (pos[0] < 0 || pos[pos.length - 1] > 99) {
    return true;
  }
  return false;
};

const onNearbyField = (pos, board, ship) => {
  if (pos.some((e) => isNearbyField(e, board, ship))) {
    return true;
  }
  return false;
};

export default isValidPosition;
