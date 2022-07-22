import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    type: "light",
    common: {
      white: "#FFFFFF",
      black: "#3F3F3F"
    },
    primary: {
      dark: "#4845B1",
      main: "#5956D6",
      light: "#C7C6FF",
      lighter: "#E7E6FF",
      lightest: "#F5F3FF"
    },
    secondary: {
      dark: "#D32F53",
      main: "#FF3964",
      light: "#FF93AB",
      lighter: "#FFC6D3",
      lightest: "#FFEBF0",
      turquoise: "#5EE5E5",
      blue: "#193773",
      accent: "#DAE1E5"
    },
    error: {
      dark: "#D91B1B",
      main: "#EF4444",
      light: "#F87171",
      lighter: "#FECACA",
      lightest: "#FEEFEF"
    },
    warning: {
      dark: "#ED6C02",
      main: "#FF9D1A",
      light: "#FFA945",
      lighter: "#FFB678",
      lightest: "#FFD3B1"
    },
    info: {
      // Same as Primary color palette
      dark: "#4845B1",
      main: "#5956D6",
      light: "#C7C6FF",
      lighter: "#E7E6FF",
      lightest: "#F5F3FF"
    },
    success: {
      dark: "#008D35",
      main: "#4CAF50",
      light: "#BEF6C7",
      lighter: "#D6FADC",
      lightest: "#F0FDF2"
    },
    grey: {
      50: "#F9FAFB",
      100: "#F9FAFB",
      200: "#F3F4F6",
      300: "#F3F4F6",
      400: "#E5E7EB",
      500: "#E5E7EB",
      600: "#C5CAD9",
      700: "#C5CAD9",
      800: "#5F6880",
      900: "#5F6880",
      A100: "#F9FAFB",
      A200: "#F3F4F6",
      A400: "#E5E7EB",
      A700: "#C5CAD9"
    },
    action: {
      hoverOpacity: 0.15
    }
  },
  typography: {
    fontFamily: "poppins"
  },
  // Add custom attributes here which are not there in MUI theme
  custom: {
    colors: {
      blue: {
        1: "#F5F3F9"
      },
      pink: {
        1: "#FDF3F5"
      }
    }
  }
});

export default lightTheme;
