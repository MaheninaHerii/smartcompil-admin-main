import React from 'react';
import Main from "./pages/Main";
import {createTheme} from "@mui/material";
import {ThemeProvider} from "@mui/styles";

const theme = createTheme();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Main/>
        </ThemeProvider>
    );
}

export default App;
