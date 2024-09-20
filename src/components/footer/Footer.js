import React, { useState } from "react";
import "./Footer.css";


export const Footer = () => {
    const theme = localStorage.getItem("theme");

    const [checked, setChecked] = useState(theme === "dark" ? true : false);

    return <div id="footer-container" style={{
        backgroundColor : theme === "dark" ? "#333" : "#f5f5f5",
        color: theme === "dark" ? "#f5f5f5" : "#333",
    }}>
        <div>{theme === "dark" ? "Dark Theme" : "Light Theme"}</div>
    </div>;
} 