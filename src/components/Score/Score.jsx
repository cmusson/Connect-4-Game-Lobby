import React from "react";
import styles from "./Score.module.css";

function Score({ score }) {
  return (
    <div className={styles.container}>
      <h4>Score</h4>
      <div className={styles.score}>
        <img className={styles.scoreToken} src="/player1.jpeg" alt="logo" />
        <h4>{score["a"]}</h4>
      </div>
      <div className={styles.score}>
        <img className={styles.scoreToken} src="/player2.png" alt="logo" />
        <h4>{score["b"]}</h4>
      </div>
    </div>
  );
}

export default Score;
