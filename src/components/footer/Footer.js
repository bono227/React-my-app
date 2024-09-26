import React, { useState } from "react";
import "./Footer.css";
import { useThemeContext } from "../../context";

export const Footer = () => {
  const { theme } = useThemeContext();

  return (
    <div
      id="footer-container"
      style={{
        backgroundColor: theme === "dark" ? "#003d66" : "#b3e0ff",
        color: theme === "dark" ? "#ffffff" : "#333",
      }}
    >
      <div>"2024 Batbold"</div>
    </div>
  );
};
