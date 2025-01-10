import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Leyout from "./Components/leyout/leyout";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import HomeLeyout from "./Components/HomeLeyout/HomeLeyout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Leyout></Leyout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <HomeLeyout></HomeLeyout>
      }
  
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);