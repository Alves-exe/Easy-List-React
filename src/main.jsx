import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./containers/Register";
import Forgot_Password from "./containers/Forgot-Password";
import Login from "./containers/Login";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register-page",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <Forgot_Password />,
  },
  {
    path: "/main",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
