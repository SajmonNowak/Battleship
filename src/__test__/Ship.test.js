import Ship from '../factories/Ship';

describe('ship functions', () =>{
    let testCarrier
    beforeEach(() =>{
        testCarrier= Ship('carrier', [0,1,2,3,4])
    });
    it('gets hitted', () => {
        testCarrier.hit(0);
        expect(testCarrier.getHits()).toEqual([0])
    });
    it("returns its position", () => {
        expect(testCarrier.getPosition()).toEqual([0,1,2,3,4]);
    })
    it('can be hitted multiple times', () => {
        testCarrier.hit(0);
        testCarrier.hit(2);
        expect(testCarrier.getHits()).toEqual([0, 2])
    });
    it('can sink', () => {
        for(let i=0; i<5; i++){
            testCarrier.hit(i);
        }
        expect(testCarrier.isSunk()).toBeTruthy()
    });
    it('shows when it is not sunk', () => {
        for(let i=0; i<3; i++){
            testCarrier.hit(i);
        }
        expect(testCarrier.isSunk()).toBeFalsy()
    });
})