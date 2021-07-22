import Ship from "./factories/ShipFactory";
import Player from "./factories/Player";
import AI from "./factories/AI";
import React, { createContext, useReducer } from "react";

const store = createContext();
const { Provider } = store;

const ACTIONS = {
  SET_PLAYERS: "Set players",
  SET_MESSAGE: "Set message",
  RESET_Message: "Reset message",
  RESTART_GAME: "Restart game",
  CHANGE_PHASE: "Change game phase",
  SET_WINNER: "set the winner of the game"
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.SET_PLAYERS: {
    }
    case ACTIONS.SET_MESSAGE: {
      return {
        ...state,
        message: payload,
      };
    }
    case ACTIONS.RESET_Message: {
      return {
        ...state,
        message: "",
      };
    }
    case ACTIONS.RESTART_GAME: {
      return {
        phase: "",
        players: {
          player: "",
          ai: "",
        },
        message: "",
        winner: "",
      };
    }
    case ACTIONS.CHANGE_PHASE: {
      return {
        ...state,
        phase: payload,
      }
    }
    case ACTIONS.SET_WINNER:{
      return {
        ...state,
        winner: payload,
      }
    }
  }
};

const Controller = ({ children }) => {
  const initialState = {
    phase:"Selection",
    players: {
      player: Player("Human", [
        Ship("carrier", [22, 23, 24, 25]),
        Ship("destroyer", [0]),
      ]),
      ai: Player("AI", [
        Ship("carrier", [1, 2, 3, 4]),
        Ship("destroyer", [22, 23]),
      ]),
    },
    message: "",
    winner: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export default Controller;
export { store, ACTIONS };
