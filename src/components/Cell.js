import React, { useState, useContext } from "react";
import playerTurn from "../helper/playerTurn";
import { store, ACTIONS } from "../Controller";
import { CellContainer } from "./style/CellContainer";
import flame from "../imgs/flame.png";

const Cell = ({ field, coordinates, belongsTo }) => {
  const [shot, setShot] = useState(false);
  const { state, dispatch } = useContext(store);
  const player = state.players.player;
  const ai = state.players.ai;

  const handleShot = () => {
    if (shot === false) {
      dispatch({ type: ACTIONS.RESET_Message });
      playerTurn(player, ai, coordinates, dispatch);
      setShot(true);
    }
  };

  const generateFlame = () => {
    return <img className="flame" alt="X" src={flame}></img>;
  };
  const generateWater = () => {
    return <div className="missed">•</div>;
  };

  if (belongsTo === "Human") {
    return (
      <CellContainer hasShip={field.hasShip} hasWater>
        {field.isHitted && (
          <div>{field.hasShip ? generateFlame() : generateWater()}</div>
        )}
      </CellContainer>
    );
  } else {
    return (
      <CellContainer
        hasShip={field.isHitted && field.hasShip}
        hasWater={!field.hasShip && field.isHitted}
        onClick={state.turn === "player" ? handleShot : undefined}
        className={`cell`}
      >
        {field.isHitted && (
          <div>{field.hasShip ? generateFlame() : generateWater()}</div>
        )}
      </CellContainer>
    );
  }
};

export default Cell;
