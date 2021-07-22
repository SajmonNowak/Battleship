const isNearbyField = (coordinate, board) => {
  const array = [];

  board.getShips().forEach((e) => array.push(...e.getNearbyCoordinates()));
  if (array.includes(coordinate)) {
    return true;
  }
  return false;
};
export default isNearbyField;
