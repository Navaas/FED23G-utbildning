import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import DrawerAppBar from "./DrawerAppBar.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import HomePage from "./pages/HomePage.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={DrawerAppBar}>
      <Route index Component={HomePage} />
      <Route path="/about" Component={AboutPage} />
      <Route path="/contact" Component={ContactPage} />
    </Route>
  )
);

const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffaa6a",
      light: "#cf8a5a",
      dark: "#ffaa6a",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
