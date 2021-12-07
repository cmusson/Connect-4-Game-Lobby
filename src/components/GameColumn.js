import React from "react";

function GameColumn({ col, onClick }) {
  return (
    <div className="column" onClick={onClick}>
      {col.map((cell) => {
        return <span className="cell">{cell}</span>;
      })}
    </div>
  );
}

export default GameColumn;
