// src/router.tsx
import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import NotFound from "./views/NotFound";
import App from './App';
import InfoGeneral from './views/InfoGeneral';
import About from './views/About'; // Importa el nuevo componente About

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
        path: "about", // Ruta para About
        element: <About /> 
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default router;
