import { createTheme } from "@mui/material";


const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: '#dc004e',
        }
    },
    typography: {
        fontFamily: 'sans-serif',
    }
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "#000",
        },
        secondary: {
            main: '#f48fb1',
        }
    },
    typography: {
        fontFamily: 'sans-serif',
    }
});

export { lightTheme, darkTheme };