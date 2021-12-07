import { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Score from "./components/Score";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");

  return (
    <div className="App">
      <h1>Connect 4!!!</h1>
      <Game currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} />
      <Score
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
      />
    </div>
  );
}

export default App;
