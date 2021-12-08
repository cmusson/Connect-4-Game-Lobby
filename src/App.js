import { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Score from "./components/Score";

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
        <img
          className="title-img"
          src="https://www.lobby.so/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fcomponents%2Flayout%2Flogo.b8a48fd7046ed4ca38ec70f9a8717100.png&w=96&q=75"
          alt="logo"
        />
        <h1> Connect 4</h1>
      </div>

      <div className="main-container">
        <div className="player">
          <h4>Current Player</h4>
          {currentPlayer === "a" ? (
            <img
              className="current"
              src="https://www.lobby.so/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fcomponents%2Flayout%2Flogo.b8a48fd7046ed4ca38ec70f9a8717100.png&w=96&q=75"
              alt="logo"
            />
          ) : (
            <img
              className="current"
              src="https://wiki.lobby.so/icon.svg "
              alt="logo"
            />
          )}
        </div>

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
