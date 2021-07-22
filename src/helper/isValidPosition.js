import isNearbyField from "./isNearbyField";

const isValidPosition = (pos, board) => {
  if (
    inBreak(pos) ||
    onNearbyField(pos, board) ||
    hasShipOnPosition(pos, board)
  ) {
    return false;
  }
  return true;
};

const hasShipOnPosition = (pos, board) => {
  const hasShip = pos.some((coord) => board.getField(coord).hasShip);
  return hasShip;
};

const inBreak = (pos) => {
  let x = parseInt(pos[0] / 10, 10) * 10;
  let y = parseInt(pos[pos.length - 1] / 10, 10) * 10;
  if (y > x) {
    return true;
  }
  return false;
};

const onNearbyField = (pos, board) => {
  if (pos.some((e) => isNearbyField(e, board))) {
    return true;
  }
  return false;
};

export default isValidPosition;
