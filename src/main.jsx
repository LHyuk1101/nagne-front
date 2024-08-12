import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/globalStyle.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./routes/index.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
