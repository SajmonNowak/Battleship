import Gameboard from "./Gameboard";
import React, { useContext } from "react";
import { store } from "../Controller";
import { GameContainer } from "../components/style/GameContainer";
import GameoverWindow from "./GameoverWindow";
import ShipSelectionWindow from "./ShipSelectionWindow";
import { Console } from "./style/Console";

const GameWindow = () => {
  const { state, dispatch } = useContext(store);

  return (
    <div>
      <GameContainer>
        {state.phase === "Selection" && <ShipSelectionWindow />}
        {state.phase === "Play" && (
          <React.Fragment>
            <div className="gameboardsContainer">
              <Gameboard player={state.players.player} />
              <Gameboard player={state.players.ai} />
            </div>
            <Console color={state.messageColor}>{state.message}</Console>
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
