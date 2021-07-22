import React, { useState } from "react";
import GameboardFactory from "../factories/GameboardFactory";
import ShipSelectionUI from "./style/ShipSelectionUI";
import SelectionCell from "./SelectionCell";
import shipList from "../Data/shipTypes";
import Ship from "./Ship";
import ShipFactory from "../factories/ShipFactory";
import DNDProvider from "./DNDProvider";

const ShipSelectionWindow = () => {
  const [selectionBoard, setSelectionBoard] = useState(GameboardFactory());
  const [helpState, setHelpState] = useState(0);

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
    return shipList.map((ship, index) => {
      const newShip = ShipFactory(ship.name, [], ship.length);
      return (
        <Ship key={index} ship={newShip} number={ship.number} id={index}></Ship>
      );
    });
  };

  return (
    <DNDProvider>
      <ShipSelectionUI>
        <div className="gameBoard">{createSelectionGameboard()}</div>
        <div className="shipList">{createShipList()}</div>
      </ShipSelectionUI>
    </DNDProvider>
  );
};

export default ShipSelectionWindow;
