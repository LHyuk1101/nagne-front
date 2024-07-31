import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import "./assets/styles/index.css";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/Layout/DefaultLayout.jsx";
import { theme } from "./assets/styles/globalStyle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/">
        <DefaultLayout>
          <App />
        </DefaultLayout>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
