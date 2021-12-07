import React, { useState } from "react";
import GameColumn from "./GameColumn";

function Game({ currentPlayer, setCurrentPlayer }) {
  let columns = [];
  for (let i = 0; i < 7; i++) {
    columns[i] = [null, null, null, null, null, null];
  }
  const [gameColumns, setGameColums] = useState(columns);

  const addToken = (columnIndex) => {
    const column = gameColumns[columnIndex];
    const tokenPosition = column.indexOf(null);
    column[tokenPosition] = currentPlayer;
    setGameColums({ ...gameColumns, [columnIndex]: column });
    console.log(gameColumns[columnIndex], columnIndex);
    if (currentPlayer === "X") setCurrentPlayer("O");
    if (currentPlayer === "O") setCurrentPlayer("X");
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
