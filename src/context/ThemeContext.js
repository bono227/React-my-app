import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
   const {children } = props;

   const [theme, setTheme] = useState("light");

   const toggleTheme = () => {
       setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
   };

   return  (<ThemeContextProvider value={{ theme, toggleTheme}}>{children}</ThemeContextProvider>);
};  

export const useThemeContext = () => {
    return useContext(ThemeContext);
}; 



// const [theme, setTheme] = useState("light");

// const toggleTheme = () => {
//     setTheme(theme === "light"? "dark" : "light");
// };

// return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//         {children}
//     </ThemeContext.Provider>
// );