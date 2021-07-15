import Ship from "./factories/Ship";

const Controller = () => {
  const ships = [
    Ship("Carrier", [0, 1, 2, 3, 4]),
    Ship("Battlesh", [11, 12, 13, 14]),
    Ship("Cruiser", [21, 22, 23]),
    Ship("Destroyer", [31, 32]),
  ];

  return ships;
};

export default Controller;
