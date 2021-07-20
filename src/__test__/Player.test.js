import Player from "../factories/Player"
import AI from "../factories/AI"
import Ship from "../factories/Ship"

describe("Player functions", () =>{
let testPlayer;
let testAI;
let testShip
    beforeEach(()=> {
        testPlayer = Player();
        testAI = AI();
        testShip = Ship("carrier", [0,1,2,3,4])
    })
    it("can attack", () => {
        testPlayer.attack(testAI.getBoard(), 0);
        expect(testAI.getBoard().getField(0)).toEqual(
            {
                hasShip: false,
                isHitted: true,
            }
        )  
    })
    it("can demage a ship", () => {
        testAI.getBoard().placeShip(testShip);
        testPlayer.attack(testAI.getBoard(), 0);
        expect(testAI.getBoard().getField(0)).toEqual({
            hasShip: testShip,
            isHitted: true,
        })
        expect(testAI.getBoard().getField(1)).toEqual({
            hasShip: testShip,
            isHitted: false,
        })
    })
})