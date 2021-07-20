import GameWindow from "./components/GameWindow";
import Controller from "./Controller";
import Ship from "./factories/Ship";
import Player from "./factories/Player";
import AI from "./factories/AI";

function App() {
  return (
    <Controller>
        <GameWindow />
    </Controller>
  );
}

export default App;
