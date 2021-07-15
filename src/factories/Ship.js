const Ship = (name, pos) => {
    const shipName = name;
    let position = pos;
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

    return {hit, isSunk, getHits, getPosition, getName}
}

export default Ship;