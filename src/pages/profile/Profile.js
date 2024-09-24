import React from "react";
import { Header } from "../../components";
import { useThemeContext } from "../../context";
import "./Profile.css";

export const Profile = () => {
  const { theme } = useThemeContext();
  return (
    <div
      id="profile-container"
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme === "dark" ? "#333" : "#f5f5f5",
        color: theme === "dark" ? "#f5f5f5" : "#333",
      }}
    >
      <Header />
      <h1>Profile Page</h1>
    </div>
  );
};
