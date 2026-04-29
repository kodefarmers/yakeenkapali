import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import UnderConstruction from "./pages/UnderConstruction";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: ["Kanit"].join(","),
  },
});

const UNDER_CONSTRUCTION = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {UNDER_CONSTRUCTION ? (
        <UnderConstruction />
      ) : (
        <RouterProvider router={router} />
      )}
    </ThemeProvider>
  </React.StrictMode>,
);
