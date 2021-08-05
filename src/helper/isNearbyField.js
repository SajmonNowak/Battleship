const isNearbyField = (coordinate, board, ship) => {
  let array = [];

  board.getShips().forEach((e) => array.push(...e.getNearbyCoordinates()));

  if (ship !== undefined && ship.getPosition().length !== 0) {
    let doubleNearby = array.filter(
      (pos, index) => array.indexOf(pos) !== index
    );
    array = array
      .filter((e) => !ship.getNearbyCoordinates().includes(e))
      .concat(doubleNearby);
  }

  if (array.includes(coordinate)) {
    return true;
  }
  return false;
};
export default isNearbyField;
