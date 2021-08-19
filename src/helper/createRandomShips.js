import shipTypes from "../Data/shipTypes";
import ShipFactory from "../factories/ShipFactory";
import GameboardFactory from "../factories/GameboardFactory";
import isValidPosition from "./isValidPosition";

const createRandomShips = () => {
  const shipArray = [];
  const board = GameboardFactory();
  shipTypes.forEach((ship) => {
    for (let i = 0; i < ship.amount; i++) {
      const randomFloat = Math.random();
      const createdShip = ShipFactory(
        ship.name,
        createRandomPos(ship.length, board),
        ship.length,
        Math.random() * 1000
      );
      board.placeShip(createdShip);
      if (randomFloat > 0.5) {
        createdShip.rotate(board);
      }
      shipArray.push(createdShip);
    }
  });
  return shipArray;
};

const createRandomPos = (length, board) => {
  const randomNumber = Math.floor(Math.random() * 100);
  let pos = [randomNumber];
  for (let i = 1; i < length; i++) {
    pos.push(randomNumber + i);
  }

  if (!isValidPosition(pos, board, "horizontal", undefined)) {
    pos = createRandomPos(length, board);
  }

  return pos;
};

export default createRandomShips;
