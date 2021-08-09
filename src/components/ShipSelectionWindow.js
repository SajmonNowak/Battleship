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

const ShipSelectionWindow = () => {
  const { state, dispatch } = useContext(store);
  const [selectionBoard, setSelectionBoard] = useState(GameboardFactory());
  const [helpState, setHelpState] = useState(0);
  const [active, setActive] = useState(false);

  const setBoard = (newBoard) => {
    setSelectionBoard(newBoard);

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
          setBoard={setBoard}
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
        <Ship key={index} shipArray={shipArray} shipData={shipType}></Ship>
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
    setSelectionBoard(GameboardFactory(createRandomShips()))
    setHelpState(helpState+1)
  };

  useEffect(() => {
    if (selectionBoard.getShips().length === 6) {
      setActive(true);
    }
  });

  return (
    <DNDProvider>
      <ShipSelectionUI>
        <div className="mainUI">
          <div className="gameBoard">{createSelectionGameboard()}</div>
          <div className="shipList">{createShipList()}</div>
        </div>
        <button onClick={assignRandomShips}>Random</button>
        <button
          onClick={active ? startGame : undefined}
          className={`playButton ${active ? "active" : "deactivated"}`}
        >
          Play
        </button>
      </ShipSelectionUI>
    </DNDProvider>
  );
};

export default ShipSelectionWindow;
