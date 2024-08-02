import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import "./assets/styles/index.css";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/Layout/DefaultLayout.jsx";
import { CustomGlobalStyles, theme } from "./assets/styles/globalStyle.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        {CustomGlobalStyles}
        <BrowserRouter basename="/">
          <DefaultLayout>
            <App />
          </DefaultLayout>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
