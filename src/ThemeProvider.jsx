import { createContext, useContext, useState, useMemo } from "react";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./theme";


const ThemeToggleContext = createContext();

export const useThemeToggle = () => useContext(ThemeToggleContext);

const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);


    const theme = useMemo(()=> (darkMode? darkTheme: lightTheme), [darkMode]);

    const toggleTheme = ()=> {
        setDarkMode((prevMode) => !prevMode);
    }

    return (
        <ThemeToggleContext.Provider value={toggleTheme}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeToggleContext.Provider>
    )
};

export default ThemeProvider;