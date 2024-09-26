import React, { useState } from "react";
import "./Header.css";
import { Switch } from "@mui/material/";
import { useThemeContext } from "../../context";

export const Header = () => {
  const { theme, toggleTheme } = useThemeContext();

  const checked = theme === "dark" ? true : false;
  const handleChange = (e) => {
    e.preventDefault();
    toggleTheme();
  };

  return (
    <div
      id="header-container"
      style={{
        backgroundColor: theme === "dark" ? "#003d66" : "#b3e0ff",
        color: theme === "dark" ? "#ffffff" : "#333",
      }}
    >
      <div>{theme === "dark" ? "Dark Theme" : "Light Theme"}</div>
      <div>
        <Switch onChange={handleChange} checked={checked} />
      </div>
    </div>
  );
};
