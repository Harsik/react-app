import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import SignIn from "./SignIn";
import SignUp from "./SignUp";

ReactDOM.render(
    // <ThemeProvider theme={theme}>
// <CssBaseline />
// <App />
// </ThemeProvider>,
    <SignUp />,
    document.querySelector('#root'),
);