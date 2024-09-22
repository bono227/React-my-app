import React, { useState } from "react";
import "./Counter.css";
import { Button } from "../button";
import { useThemeContext } from "../../context";
import { Link } from "react-router-dom";

export const Counter = () => {
  const { theme } = useThemeContext();
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div
      id="counter-container"
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#f5f5f5",
        color: theme === "dark" ? "#f5f5f5" : "#333",
      }}
    >
      <h2>Counter App</h2>
      <div id="counter">
        <span id="count"> {counter}</span>

        <div id="button-container">
          <Button id="increment" onClick={increment}>
            +
          </Button>
          <Button id="decrement" onClick={decrement}>
            -
          </Button>
          <Button id="reset" onClick={reset}>
            RESET
          </Button>
        </div>
      </div>
      <Link
        to="/signin"
        style={{
          textDecoration: "none",
          fontSize: "14px",
          color: "black",
          marginTop: "15px",
        }}
      >
        Sign-in or Sign-Up
      </Link>
    </div>
  );
};
