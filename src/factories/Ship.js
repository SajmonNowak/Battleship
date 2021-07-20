import createNearbyCoordinates from "../helper/createNearbyCoordinates"

const Ship = (name, pos) => {
    const shipName = name;
    let position = pos;
    let nearbyCoordinates = createNearbyCoordinates(pos);
    let hitted = [];

    const hit = (field) =>{
        hitted.push(field);
    };

    const isSunk = () => {
        return (position.every((pos) => hitted.includes(pos)))
    };

    const getHits = () => {
        return hitted;
    }

    const getPosition = () => {
        return position
    }
    
    const getName = () => {
        return shipName
    }

    const getNearbyCoordinates = () => {
        return nearbyCoordinates
    }

    return {hit, isSunk, getHits, getPosition, getName, getNearbyCoordinates}
}

export default Ship;