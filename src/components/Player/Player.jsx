import React from "react";
import styles from "./Player.module.css";

const Player = ({ currentPlayer }) => {
  return (
    <div className={styles.player}>
      <h4>Current Player</h4>
      {currentPlayer === "a" ? (
        <img className={styles.current} src="/player1.jpeg" alt="logo" />
      ) : (
        <img className={styles.current} src="/player2.png " alt="logo" />
      )}
    </div>
  );
};

export default Player;
