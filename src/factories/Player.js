import GameboardFactory from "./GameboardFactory";
import Ship from "./Ship";

const Player = (playerType, shipSelection) => {
  let type = playerType;
  let score = 0;
  let ships = shipSelection;
  const playerGameboard = GameboardFactory(ships);

  const attack = (board, coordinate) => {
    if (!board.getField(coordinate).isHitted) {
      board.receiveAttack(coordinate);
    }
  };

  const increaseScore = () => {
      score++
  }

  const getScore = () => {
      return score;
  }

  const getBoard = () => {
      return playerGameboard;
  }

  const getShips = () => {
      return ships;
  }

  const getType = () => {
    return type;
  }

  return {attack, increaseScore, getScore, getBoard, getShips, getType}
};

export default Player;
