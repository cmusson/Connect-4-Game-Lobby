import React from "react";

function Score({ currentPlayer, setCurrentPlayer }) {
  return (
    <div className="Score Container">
      <h4>Score</h4>
      <div className="score">
        <img
          className="score-token"
          src="https://www.lobby.so/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fcomponents%2Flayout%2Flogo.b8a48fd7046ed4ca38ec70f9a8717100.png&w=96&q=75"
          alt="logo"
        />
        <h4>:</h4>
      </div>
      <div className="score">
        <img
          className="score-token"
          src="https://wiki.lobby.so/icon.svg "
          alt="logo"
        />
        <h4>:</h4>
      </div>
    </div>
  );
}

export default Score;
