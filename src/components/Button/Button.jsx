import React from "react";
import styles from "./Button.module.css";

const Button = ({ resetBoard }) => {
  return <button onClick={() => resetBoard()}>New Game</button>;
};

export default Button;
