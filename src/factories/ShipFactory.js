import createNearbyCoordinates from "../helper/createNearbyCoordinates";

const ShipFactory = (name, pos, shipLength) => {
  const shipName = name;
  let position = pos;
  let length = shipLength;
  let nearbyCoordinates = createNearbyCoordinates(pos);
  let hitted = [];
  const hit = (field) => {
    hitted.push(field);
  };

  const isSunk = () => {
    return position.every((pos) => hitted.includes(pos));
  };

  const getHits = () => {
    return hitted;
  };

  const getPosition = () => {
    return position;
  };

  const setPosition = (coordinatesArray) => {
    position = coordinatesArray;
    nearbyCoordinates = createNearbyCoordinates(coordinatesArray);
  };

  const getName = () => {
    return shipName;
  };

  const getNearbyCoordinates = () => {
    return nearbyCoordinates;
  };

  const getLength = () => {
    return length;
  };

  return {
    hit,
    isSunk,
    getHits,
    getPosition,
    setPosition,
    getName,
    getNearbyCoordinates,
    getLength,
  };
};

export default ShipFactory;
