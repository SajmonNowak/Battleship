import Gameboard from "./GameboardFactory";

const AI = (randomizedShipSelection) => {
  let score = 0;
  let ships = randomizedShipSelection;
  const aiGameboard = Gameboard(ships);

  const randomAttack = () => {
    const randomCoordinate = Math.floor(Math.random() * 100);

    if (!aiGameboard.getField().isHitted) {
      aiGameboard.receiveAttack(randomCoordinate);
    }
  };

  const increaseScore = () => {
    score++;
  };

  const getScore = () => {
    return score;
  };

  const getBoard = () => {
    return aiGameboard;
  };

  const getShips = () => {
    return ships;
  };

  return { randomAttack, increaseScore, getScore, getBoard, getShips };
};

export default AI;
