import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={App}>
      <Route index Component={HomePage} />
      <Route path="new" Component={NewPostPage} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
