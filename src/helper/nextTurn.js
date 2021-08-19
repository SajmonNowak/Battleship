import { ACTIONS } from "../Controller";
import aiTurn from "./aiTurn";

const nextTurn = (nextTurn, player, ai, dispatch) => {
  if (nextTurn === "ai") {
    dispatch({
      type: ACTIONS.SET_TURN,
      payload: "ai",
    });
    setTimeout(() => aiTurn(player, ai, dispatch), 1250);
  } else {
    dispatch({
      type: ACTIONS.SET_TURN,
      payload: "player",
    });
  }
};

export default nextTurn;
