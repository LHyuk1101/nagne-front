import { createTheme, GlobalStyles } from "@mui/material";

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
export const CustomGlobalStyles = () => {
  return (
    <GlobalStyles
      styles={{
        ":root": {
          fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
          lineHeight: 1.5,
          fontWeight: 400,
          colorScheme: "light",
          color: "rgba(0, 0, 0, 0.87)",
          backgroundColor: "#ffffff",
          fontSynthesis: "none",
          textRendering: "optimizeLegibility",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
        body: {
          margin: 0,
          display: "flex",
          placeItems: "center",
          minWidth: "320px",
          minHeight: "100vh",
        },
      }}
    />
  );
};
