import '../App.css'
import {BrowserRouter} from "react-router-dom";
import Router from "../router/index.jsx";
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
        breakpoints: {
            values: {
                xs: 0,
                sm: 768
            }
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        '&:focus': {
                            outline: 'none',
                        }
                    }
                }
            }
        }
    });
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter basename="/">
                <DefaultLayout>
                        <Router/>
                </DefaultLayout>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
