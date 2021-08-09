import { ACTIONS } from "../Controller";

const humanTurn = (player, ai, coordinate, dispatch) => {
  const Gameboard = ai.getGameboard();
  Gameboard.receiveAttack(coordinate);

  if (Gameboard.getField(coordinate).hasShip) {
    checkIfFatal(Gameboard, coordinate, dispatch);
    checkIfWin(Gameboard, player, dispatch);
  }

  aiTurn(player, dispatch);
};

const aiTurn = (player, dispatch) => {
  const Gameboard = player.getGameboard();
  
  if(hittedShipOnBoard(Gameboard)){
    console.log('ausgeführt')
    hitNaerbyFieldOfShip(Gameboard);
  } else {
    hitRandomPosition(Gameboard)
  }

};

const hittedShipOnBoard = (Gameboard) => {
  const hittedShip= Gameboard.getShips().find((ship) => ship.getHits().length > 0 && !ship.isSunk())
 console.log(hittedShip)

  if(hittedShip){
    return hittedShip
  } else {
    return false;
  }
}

const hitRandomPosition = (Gameboard) => {
  let unHittedFields = [];
  Gameboard.getBoard().forEach((field, index) => {
    if (field.isHitted === false) {
      unHittedFields.push(index);
    }
  });
  const randomNumber = Math.floor(Math.random() * (unHittedFields.length - 1));
  Gameboard.receiveAttack(unHittedFields[randomNumber]);
}

const hitNaerbyFieldOfShip = (Gameboard) => {
  const hittedShip = hittedShipOnBoard(Gameboard);
  const hittedPositions = hittedShip.getHits().sort((a,b )=> a-b);
  const alignment = hittedShip.getAlignment();
  console.log(hittedPositions);
  if(alignment === "horizontal"){
  attackHorizontally(Gameboard, hittedPositions, alignment);
} else {
  attackVertically(Gameboard,hittedPositions, alignment);
}
handlePlayerShipDestroyed(Gameboard, hittedShip); 
}

const attackHorizontally = (Gameboard, hittedPositions,alignment) => {
  const posBeforeHit= hittedPositions[0]-1;
  const posAfterHit = hittedPositions[hittedPositions.length-1]+1;
  console.log(posBeforeHit)
  if (isValidAttack(posBeforeHit, Gameboard, alignment)){
    Gameboard.receiveAttack(posBeforeHit)
  } else {
    Gameboard.receiveAttack(posAfterHit)
  }
}

const attackVertically = (Gameboard, hittedPositions, alignment) => {
  const posBeforeHit= hittedPositions[0]-10;
  const posAfterHit = hittedPositions[hittedPositions.length-1]+10;

  if(isValidAttack(posBeforeHit, Gameboard, alignment)){
    Gameboard.receiveAttack(posBeforeHit)
  } else {
    Gameboard.receiveAttack(posAfterHit)
  }


}

const isValidAttack= (coordinate, Gameboard, alignment) => {

  const fieldToHit = Gameboard.getField(coordinate); 
  
  if(fieldToHit.isHitted || checkIfNotOnBoard(coordinate) || inBreak(coordinate, alignment)){
    return false;
  }
  return true;
}



const checkIfNotOnBoard = (coordinate) => {
  if (coordinate < 0 || coordinate > 99){
    return true
  }
  return false
}

const inBreak = (coordinate, alignment) => {
  if (alignment === "horizontal") {
    let x = parseInt(coordinate / 10, 10) * 10;
    let y = parseInt( (coordinate+1) / 10, 10) * 10;
    if (y > x) {
      return true;
    }
  }

  return false;
}

const handlePlayerShipDestroyed = (Gameboard, ship) => {
  if(ship.isSunk()){
    revealNearbyCells(Gameboard, ship.getPosition()[0]);
  }
}

const checkIfFatal = (board, coordinate, dispatch) => {
  if (board.checkIfSunk(coordinate)) {
    dispatch({
      type: ACTIONS.SET_MESSAGE,
      payload: "You destroyed enemy's Ship",
    });
    revealNearbyCells(board, coordinate);
  }
};

const checkIfWin = (board, player, dispatch) => {
  if (board.checkIfAllDestroyed()) {
    const winner = player.getType();
    console.log(winner);
    dispatch({
      type: ACTIONS.CHANGE_PHASE,
      payload: "End",
    });
    dispatch({
      type: ACTIONS.SET_WINNER,
      payload: winner,
    });
  }
};

const revealNearbyCells = (board, coordinate) => {
  const ship = board.getField(coordinate).hasShip;
  ship.getNearbyCoordinates().forEach((e) => board.receiveAttack(e));
};

export default humanTurn;
