import { useState, useCallback, useMemo } from "react";
import "./App.css";
import Game from "./components/Game";
import Score from "./components/Score";
import Player from "./components/Player";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";

function App() {
  const [starter, setStarter] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState("a");
  const [score, setScore] = useState({ a: 0, b: 0 });
  let columns = useMemo(() => {
    return {};
  }, []);
  for (let i = 0; i < 7; i++) {
    columns[i] = [null, null, null, null, null, null];
  }
  const [gameColumns, setGameColums] = useState(columns);

  const resetBoard = useCallback(() => {
    setGameColums(columns);
    if (starter === true) {
      setStarter(false);
      setCurrentPlayer("b");
    }
    if (starter === false) {
      setStarter(true);
      setCurrentPlayer("a");
    }
  }, [starter, columns]);

  return (
    <div className="app">
      <Header />

      <div className="main-container">
        <Player currentPlayer={currentPlayer} />
        <Game
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          gameColumns={gameColumns}
          setGameColums={setGameColums}
          score={score}
          setScore={setScore}
          resetBoard={resetBoard}
        />
        <Score
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          score={score}
        />
      </div>
      <Button resetBoard={resetBoard} />
    </div>
  );
}

export default App;
