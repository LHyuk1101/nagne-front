import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  palette: {
    primary: {
      main: "#8BC34A",
    },
    secondary: {
      main: "#FF9800",
      light: "#FFEB3B",
      contrastText: "#364D1C",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
          },
        },
      },
    },
  },
});
