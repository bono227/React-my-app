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
        backgroundColor: theme === "dark" ? "#333" : "#f5f5f5",
        color: theme === "dark" ? "#f5f5f5" : "#333",
      }}
    >
      <div>{theme === "dark" ? "Dark Theme" : "Light Theme"}</div>
      <div>
        <Switch onChange={handleChange} checked={checked} />
      </div>
    </div>
  );
};
