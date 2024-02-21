import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "./AppLayout.tsx";
import HomePage from "./pages/HomePage.tsx";
import ProductPage from "./pages/ProductPage.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={AppLayout}>
      <Route index Component={HomePage} />
      <Route path="products/:id" Component={ProductPage} />
      <Route path="*" element={<span>Sidan finns inte...</span>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
