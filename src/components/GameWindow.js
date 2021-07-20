import Gameboard from "./Gameboard";
import React, { useContext } from "react";
import { store } from "../Controller";
import { GameContainer } from "../components/style/GameContainer";
import GameoverWindow from "./GameoverWindow";
import ShipSelectionWindow from "./ShipSelectionWindow";


const GameWindow = () => {
  const { state, dispatch } = useContext(store);

  return (
    <div>
      <div>{state.message}</div>
      <GameContainer>
        {state.phase === "Selection" && <ShipSelectionWindow />}
        {state.phase === "Play" && (
          <React.Fragment>
            <Gameboard player={state.players.player} />
            <Gameboard player={state.players.ai} />
          </React.Fragment>
        )}
        {state.phase === "End" && (
          <GameoverWindow winner={state.winner} dispatch={dispatch} />
        )}
      </GameContainer>
    </div>
  );
};

export default GameWindow;
