import '../App.css'
import {BrowserRouter} from "react-router-dom";
import Router from "../router/index.jsx";
import Header from "../components/Layout/Header";
import {createTheme, ThemeProvider} from "@mui/material";
import DefaultLayout from "../components/Layout/DefaultLayout.jsx";

function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#8BC34A',
            },
            secondary: {
                main: '#FF9800',
                light: '#FFEB3B',
                contrastText: '#364D1C',
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <DefaultLayout>
                <BrowserRouter basename="/">
                    <Router/>
                </BrowserRouter>
            </DefaultLayout>
        </ThemeProvider>
    )
}

export default App
