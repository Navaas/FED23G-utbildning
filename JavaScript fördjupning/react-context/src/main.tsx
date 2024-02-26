import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "./AppLayout.tsx";
import FavoritesPage from "./pages/FavoritesPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import LikedPostsProvider from "./providers/LikedPostProvider.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={AppLayout}>
      <Route index Component={HomePage} />
      <Route path="favoriter" Component={FavoritesPage} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  /* StrictMode ska alltid ligga ytterst. */
  <React.StrictMode>
    <LikedPostsProvider>
      <RouterProvider router={router} />
    </LikedPostsProvider>
  </React.StrictMode>
);
