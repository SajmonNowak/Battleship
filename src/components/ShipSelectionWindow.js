import React, { useState, useContext, useEffect } from "react";
import GameboardFactory from "../factories/GameboardFactory";
import ShipSelectionUI from "./style/ShipSelectionUI";
import SelectionCell from "./SelectionCell";
import shipList from "../Data/shipTypes";
import Ship from "./Ship";
import ShipFactory from "../factories/ShipFactory";
import DNDProvider from "./DNDProvider";
import { store, ACTIONS } from "../Controller";
import createRandomShips from "../helper/createRandomShips";
import SelectionInfo from "./SelectionInfo";
const ShipSelectionWindow = () => {
  const { dispatch } = useContext(store);
  const [selectionBoard, setSelectionBoard] = useState(GameboardFactory());
  const [helpState, setHelpState] = useState(0);
  const [active, setActive] = useState(false);

  const render = (newBoard) => {
    setHelpState(helpState + 1);
  };

  const createSelectionGameboard = () => {
    return selectionBoard.getBoard().map((cell, index) => {
      return (
        <SelectionCell
          key={index}
          field={cell}
          coordinates={index}
          board={selectionBoard}
          render={render}
        />
      );
    });
  };

  const createShipList = () => {
    return shipList.map((shipType, index) => {
      let shipArray = [];

      for (let i = 0; i < shipType.amount; i++) {
        shipArray.push(
          ShipFactory(shipType.name, [], shipType.length, index * 10 + i)
        );
      }

      return (
        <Ship
          key={index}
          shipArray={shipArray}
          shipData={shipType}
          Gameboard={selectionBoard}
        ></Ship>
      );
    });
  };

  const startGame = () => {
    dispatch({
      type: ACTIONS.SET_PLAYERS,
      payload: selectionBoard.getShips(),
    });
  };

  const assignRandomShips = () => {
    setSelectionBoard(GameboardFactory(createRandomShips()));
    setHelpState(helpState + 1);
  };

  useEffect(() => {
    if (selectionBoard.getShips().length === 6) {
      setActive(true);
    }
  }, [selectionBoard.getShips().length]);

  return (
    <DNDProvider>
      <ShipSelectionUI>
        <div className="mainUI">
          <div className="gameBoard">{createSelectionGameboard()}</div>
          <div>
            <div className="shipList">{createShipList()}</div>
            <SelectionInfo />
          </div>
        </div>
        <div className="buttonContainer">
          <button className=" button randomButton" onClick={assignRandomShips}>
            Random
          </button>
          <button
            onClick={active ? startGame : undefined}
            className={`button playButton ${active ? "active" : "deactivated"}`}
          >
            Play
          </button>
        </div>
      </ShipSelectionUI>
    </DNDProvider>
  );
};

export default ShipSelectionWindow;
