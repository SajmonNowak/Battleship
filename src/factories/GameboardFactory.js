const GameboardFactory = (ships) => {
  let board = []
  let shipsOnBoard = [];

  const placeShips = (shipArray) => {
    shipArray.forEach((ship) => placeShip(ship));
  };

  const placeShip = (ship) => {
    let coordinates = ship.getPosition();
    coordinates.forEach((coordinate) => (board[coordinate].hasShip = ship));
    shipsOnBoard.push(ship);
  };

  

  const init = () => {
    let newBoard = [];
    for (let i = 0; i < 100; i++) {
      newBoard.push({ hasShip: false, isHitted: false });
    }
    board = newBoard;
  };

  init();

  
  let shipCount = typeof ships === "undefined" ? 0 : ships.length;
  let shipsDestroyed = 0;
  if (shipCount > 0) {
    placeShips(ships);
  }

  const getBoard = () => {
    return board;
  };

  const getField = (coordinate) => {
    return board[coordinate];
  };

  const getShips = () => {
    return shipsOnBoard;
  };

  const receiveAttack = (coordinate) => {
    const ship = board[coordinate].hasShip;

    board[coordinate].isHitted = true;
    if (ship) {
      ship.hit(coordinate);
      if(ship.isSunk()){
        shipsDestroyed ++
      }
    }
  };


  const checkIfAllDestroyed = () => {
    if (shipCount === shipsDestroyed) {
      return true;
    }
  };

  return {
    placeShips,
    placeShip,
    getBoard,
    getField,
    getShips,
    receiveAttack,
    checkIfAllDestroyed,
  };
};

export default GameboardFactory;
