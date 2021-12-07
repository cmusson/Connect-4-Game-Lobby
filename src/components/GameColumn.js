import React from "react";

function GameColumn({ col, onClick }) {
  return (
    <div className="column" onClick={onClick}>
      {col.map((cell) => {
        if (cell === "a") {
          return (
            <img
              className="token"
              src="https://www.lobby.so/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fcomponents%2Flayout%2Flogo.b8a48fd7046ed4ca38ec70f9a8717100.png&w=96&q=75"
              alt="logo"
            />
          );
        } else if (cell === "b") {
          return (
            <img
              className="token"
              src="https://wiki.lobby.so/icon.svg "
              alt="logo"
            />
          );
        } else return <div className="cell"></div>;
      })}
    </div>
  );
}

export default GameColumn;
