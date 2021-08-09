import createNearbyCoordinates from "../helper/createNearbyCoordinates";
import isValidPosition from "../helper/isValidPosition";

const ShipFactory = (name, pos, shipLength, _id) => {
  const shipName = name;
  let position = pos;
  let alignment = "horizontal";
  let length = shipLength;
  let nearbyCoordinates = createNearbyCoordinates(pos);
  let hitted = [];
  let id = _id;

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

  const setNearbyCoordinates = (coordinates) => {
    nearbyCoordinates = coordinates;
  };

  const getLength = () => {
    return length;
  };

  const getId = () => {
    return id;
  };

  const getAlignment = () => {
    return alignment;
  };

  function rotate(board) {
    const fixedPos = position[0];
    let newPos;

    if (alignment === "horizontal") {
      newPos = position.map((pos, index) => fixedPos + 10 * index);
      alignment = "vertical";
    } else {
      newPos = position.map((pos, index) => fixedPos + index);
      alignment = "horizontal";
    }
    if (isValidPosition(newPos, board, alignment, this)) {
      position = newPos;
      nearbyCoordinates = createNearbyCoordinates(position);
    } else {
      if (alignment === "horizontal") {
        alignment = "vertical";
      } else {
        alignment = "horizontal";
      }
    }
  }

  return {
    hit,
    isSunk,
    getHits,
    getPosition,
    setPosition,
    getName,
    getNearbyCoordinates,
    setNearbyCoordinates,
    getLength,
    getId,
    rotate,
    getAlignment,
  };
};

export default ShipFactory;
