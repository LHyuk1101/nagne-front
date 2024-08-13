import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
  palette: {
    mode: "light",
    text: {
      primary: "#464555",
    },
    primary: {
      main: "#3561F1",
      matchFirst: "#008bef",
    },
    secondary: {
      main: "#FF9800",
      light: "#FFEB3B",
      contrastText: "#364D1C",
    },
    action: {
      hoverGreen: "#008bef",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 5000,
      lg: 5000,
      md: 5000,
      xl: 5000,
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
    MuiTab: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
          },
          "&::after": {
            display: "none",
          },
        },
      },
    },
  },
});
