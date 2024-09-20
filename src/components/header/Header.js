import React  from "react";
import "./Header.css";
import {Switch} from '@mui/material/';
import { useThemeContext } from "../../context";

export const Header = () => {
    const {theme, toggleTheme  } = useThemeContext();
    // const theme = localStorage.getItem("theme");

    
    // const [checked, setChecked] = useState(theme === "dark" ? true : false);

    const handleChange = (e) => {

        toggleTheme();
        // setChecked(e.target.checked);
        // localStorage.setItem("theme", e.target.checked ? "dark" : "light");
    } ;

    return <div id="header-container" style={{
        backgroundColor : theme === "dark" ? "#333" : "#f5f5f5",
        color: theme === "dark" ? "#f5f5f5" : "#333",
    }}>
        <div>{theme === "dark" ? "Dark Theme" : "Light Theme"}</div>
        <div>
            <Switch onChange={handleChange} checked={theme === "dark" ? true : false}/>
        </div>
    </div>;
}  