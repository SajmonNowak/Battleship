import Gameboard from "../factories/GameboardFactory";
import Ship from "../factories/Ship";

describe("GameboardFactory functions", () => {
  let testBoard;

  beforeEach(() => {
    testBoard = Gameboard();
  });
  it("initializes a gameboard with the appropriate amount of cells", () => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push({ hasShip: false, isHitted: false });
    }
    expect(testBoard.getBoard()).toEqual(arr);
  });
  it("can place a ship", () => {
    const testCarrier = Ship("carrier", [0, 1, 2, 3, 4])
    testBoard.placeShip(testCarrier);
    for (let i = 0; i < 5; i++) {
      const field = testBoard.getField(i);
      expect(field).toEqual({
        hasShip: testCarrier,
        isHitted: false,
      });
    }
  });
  it('can receive an Attack', () => {
    const testCarrier = Ship("carrier", [0, 1, 2, 3, 4])
    testBoard.placeShip(testCarrier);
    const expAttackedFieldShip = {
      hasShip: testCarrier,
      isHitted: true,
    }
    const expAttackedFieldWater = {
      hasShip: false,
      isHitted: false,
    }
    testBoard.receiveAttack(0);
    testBoard.receiveAttack(1);
    expect(testBoard.getField(5)).toEqual(expAttackedFieldWater)
    expect(testBoard.getField(0)).toEqual(expAttackedFieldShip)
  })
  it('damages a ship if hit', () => {
    const testCarrier = Ship("carrier", [0, 1, 2, 3, 4]);
    testBoard.placeShip(testCarrier);
    testBoard.receiveAttack(0);
    expect(testCarrier.getHits()).toEqual([0]);
  })
});
