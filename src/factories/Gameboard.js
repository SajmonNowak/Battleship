import Ship from "./Ship";
import Controller from "../Controller";

const Gameboard = () => {
  const init = () => {
    let newBoard = [];
    for (let i = 0; i < 100; i++) {
      newBoard.push({ hasShip: false, isHitted: false });
    }
    return newBoard;
  };

  let board = init();

  const getBoard = () => {
    return board;
  };

  const getField = (coordinate) => {
    return board[coordinate];
  };

  const placeShip = (ship) => {
    let coordinates = ship.getPosition();
    coordinates.every((coordinate) => (board[coordinate].hasShip = ship));
  };

  const receiveAttack = (coordinate) => {
    board[coordinate].isHitted = true;
    if (board[coordinate].hasShip) {
      board[coordinate].hasShip.hit(coordinate);
    }
  };

  return { placeShip, init, getBoard, getField, receiveAttack };
};

export default Gameboard;
