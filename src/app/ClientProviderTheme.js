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
    // h1: {
    //   fontSize: "53px",
    //   "@media (min-width:100px)": {
    //     fontSize: "9rem",
    //   },
    //   "@media (min-width:600px)": {
    //     fontSize: "11px",
    //   },
    // },
    h1: {
      "@media (min-width:300px)": {
        fontSize: "22px",
        fontWeight: "600",
      },
      "@media (min-width:780px)": {
        fontSize: "32px",
        fontWeight: "600",
      },
    },
    h2: {
      fontSize: "24Px",
    },
    h3: {
      fontSize: "22px",
    },
    h4: {
      fontSize: "20px",
    },
    h5: {
      fontSize: "18px",
      fontWeight: "600",
    },
    h6: {
      fontSize: "16px",
      fontWeight :"600"
    },
    subtitle1: {
      fontSize: "14px",
      fontWeight: "600",
    },
    subtitle2: {
      fontSize: "14px",
      fontWeight: "400",
    },
    body1: {
      fontSize: "12px",
    },
    body2: {
      fontSize: "10px",
    },
  },
});

const ClientProviterTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default ClientProviterTheme;
