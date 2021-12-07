import { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Score from "./components/Score";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("a");

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
          <h4>Current Player: </h4>
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
        />
        <Score
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
        />
      </div>
    </div>
  );
}

export default App;
