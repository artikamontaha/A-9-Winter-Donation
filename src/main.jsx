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
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Help from "./Components/Help/Help";
import Donate from "./Components/Donate/Donate";
import DonateDetails from "./Components/DonateDetails/DonateDetails";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import PrivetRoute from "./Components/PrivetRoute/PrivetRoute";
import Dashboard from "./Components/Dashboard/Dashboard";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";

const donateLoader = async ({ params }) => {
  const res = await fetch("/data.json");
  const data = await res.json();
  console.log(data);
  return data.find((donate) => donate.id === Number(params.id));
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Leyout></Leyout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomeLeyout></HomeLeyout>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
      {
        path: "/Help",
        element: <Help></Help>,
      },
      {
        path: "/Donate",
        element: <Donate></Donate>,
        loader: ({ params }) => fetch(`data.json?id=${params.id}`),
      },
      {
        path: "/donate/:id",
        element: (
          <PrivetRoute>
            <DonateDetails />
          </PrivetRoute>
        ),
        loader: donateLoader,
      },
      {
        path: "/Dashboard",
        element: (
          <PrivetRoute>
            <Dashboard></Dashboard>
          </PrivetRoute>
        ),
      },
      {
        path: "/ForgetPassword", 
        element: <ForgetPassword></ForgetPassword>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
