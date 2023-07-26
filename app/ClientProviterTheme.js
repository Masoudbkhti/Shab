"use client";
import { createTheme, ThemeProvider } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#080a1a",
      light: "#757575",
      disabled: "#CECFD9",
    },
    warning: {
      main: "#fe712a",
      light: "#fff7eb",
    },
    info: {
      main: "#4156d9",
      light: "#f4f5ff",
    },
    background: {
      Default: "#ffffff",
      primary: "#F9F9F9",
      secondary: "#FEF7F4",
      warning: "#fff7eb",
    },
  },
  typography: {
    fontFamily: "iranyekan",
  },
});

const ClientProviterTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default ClientProviterTheme;
