import GameWindow from "./components/GameWindow";
import Header from "./components/Header";
import { AppContainer } from "./components/style/AppContainer";
import Controller from "./Controller";

function App() {
  return (
    <AppContainer>
      <Controller>
        <Header />
        <GameWindow />
      </Controller>
    </AppContainer>
  );
}

export default App;
