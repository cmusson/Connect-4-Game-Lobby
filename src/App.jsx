import { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Score from "./components/Score";
import Player from "./components/Player";

function App() {
  const [starter, setStarter] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState("a");
  const [score, setScore] = useState({ a: 0, b: 0 });
  let columns = {};
  for (let i = 0; i < 7; i++) {
    columns[i] = [null, null, null, null, null, null];
  }
  const [gameColumns, setGameColums] = useState(columns);

  const resetBoard = () => {
    setGameColums(columns);
    if (starter === true) {
      setStarter(false);
      setCurrentPlayer("b");
    }
    if (starter === false) {
      setStarter(true);
      setCurrentPlayer("a");
    }
  };

  return (
    <div className="app">
      <div className="title">
        <img className="title-img" src="/player1.jpeg" alt="logo" />
        <h1> Connect 4</h1>
      </div>

      <div className="main-container">
        <Player currentPlayer={currentPlayer} />
        <Game
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          gameColumns={gameColumns}
          setGameColums={setGameColums}
          score={score}
          setScore={setScore}
        />
        <Score
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          score={score}
        />
      </div>
      <button onClick={() => resetBoard()}>New Game</button>
    </div>
  );
}

export default App;
