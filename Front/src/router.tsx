// src/router.tsx
import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import ForgotPassword from "./views/ForgotPassword";
import NotFound from "./views/NotFound";
import App from './App';
import InfoGeneral from './views/InfoGeneral';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "/",
        element: <InfoGeneral />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default router;
