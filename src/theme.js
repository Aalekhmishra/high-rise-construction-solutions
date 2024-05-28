// theme.js or theme/index.js
// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//     typography: {
//         // fontFamily: 'Times New Roman, Times, serif, Roboto, Arial, sans-serif', // Define your custom font family here
//         fontFamily: [
//             '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"',].join(','),
//     },
//     palette: {
//         mode: 'dark',
//         primary: {
//             main: '#000', // Custom primary color
//         },
//         secondary: {
//             main: '#fff', // Custom secondary color
//         },
//         text: {
//             main: '#000',
//             secondary: "#fff",
//         }
//     },
// });

// export default theme;
// theme.js
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export { lightTheme, darkTheme };

