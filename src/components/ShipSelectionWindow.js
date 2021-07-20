import React from "react";
import GameboardFactory from "../factories/GameboardFactory";
import ShipSelectionUI from "./style/ShipSelectionUI";
import SelectionCell from "./SelectionCell";
import shipList from "../Data/shipTypes";
import Ship from "./Ship";
import DNDProvider from "./DNDProvider";

const ShipSelectionWindow = () => {
  const createSelectionGameboard = () => {
    const board = GameboardFactory();

    return board.getBoard().map((cell, index) => {
      return (
        <SelectionCell key={index} field={cell} coordinates={index} board={board}/>
      );
    });
  };

  const createShipList = () => {
    return shipList.map((ship, index) => {
      return (
        <Ship
          key={index}
          name={ship.name}
          length={ship.length}
          number={ship.number}
        ></Ship>
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
