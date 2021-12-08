import React, { useEffect } from "react";
import GameColumn from "./GameColumn";

function Game({
  currentPlayer,
  setCurrentPlayer,
  gameColumns,
  setGameColums,
  score,
  setScore,
}) {
  useEffect(() => {
    checkGameOver();
  }, [gameColumns]);

  const addToken = (columnIndex) => {
    const column = gameColumns[columnIndex];
    const tokenPosition = column.indexOf(null);
    column[tokenPosition] = currentPlayer;
    setGameColums({ ...gameColumns, [columnIndex]: column });
    console.log(gameColumns[columnIndex], columnIndex);
    if (currentPlayer === "a") setCurrentPlayer("b");
    if (currentPlayer === "b") setCurrentPlayer("a");
  };

  const checkGameOver = () => {
    if (gameOver()) {
      alert("Game Over!");
    }
  };

  const gameOver = () => {
    // check if 4 next to each other in a column
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 6 - 3; j++) {
        if (
          gameColumns[i][j] !== null &&
          gameColumns[i][j] === gameColumns[i][j + 1] &&
          gameColumns[i][j + 1] === gameColumns[i][j + 2] &&
          gameColumns[i][j + 2] === gameColumns[i][j + 3]
        ) {
          if (currentPlayer === "a") setScore({ ...score, b: score.b + 1 });
          else setScore({ ...score, a: score.a + 1 });
          return true;
        }
      }
    }

    // check if 4 next to each other in a row
    for (let i = 0; i < 7 - 3; i++) {
      for (let j = 0; j < 6; j++) {
        if (
          gameColumns[i][j] !== null &&
          gameColumns[i][j] === gameColumns[i + 1][j] &&
          gameColumns[i + 1][j] === gameColumns[i + 2][j] &&
          gameColumns[i + 2][j] === gameColumns[i + 3][j]
        ) {
          if (currentPlayer === "a") setScore({ ...score, b: score.b + 1 });
          else setScore({ ...score, a: score.a + 1 });
          return true;
        }
      }
    }
    // check if 4 diagonal up to the right
    for (let i = 0; i < 7 - 3; i++) {
      for (let j = 0; j < 6 - 3; j++) {
        if (
          gameColumns[i][j] !== null &&
          gameColumns[i][j] === gameColumns[i + 1][j + 1] &&
          gameColumns[i + 1][j + 1] === gameColumns[i + 2][j + 2] &&
          gameColumns[i + 2][j + 2] === gameColumns[i + 3][j + 3]
        ) {
          if (currentPlayer === "a") setScore({ ...score, b: score.b + 1 });
          else setScore({ ...score, a: score.a + 1 });
          return true;
        }
      }
    }

    // check if 4 diagonal down to right
    for (let i = 0; i < 7 - 3; i++) {
      for (let j = 5; j >= 3; j--) {
        if (
          gameColumns[i][j] !== null &&
          gameColumns[i][j] === gameColumns[i + 1][j - 1] &&
          gameColumns[i + 1][j - 1] === gameColumns[i + 2][j - 2] &&
          gameColumns[i + 2][j - 2] === gameColumns[i + 3][j - 3]
        ) {
          if (currentPlayer === "a") setScore({ ...score, b: score.b + 1 });
          else setScore({ ...score, a: score.a + 1 });
          return true;
        }
      }
    }
    return false;
  };

  return (
    <div className="grid">
      {Object.entries(gameColumns).map(([key, col], x) => {
        return <GameColumn col={col} onClick={() => addToken(x)} />;
      })}
    </div>
  );
}

export default Game;
