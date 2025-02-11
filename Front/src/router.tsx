import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import NotFound from "./views/NotFound";
import App from './App'; // Importa tu componente principal

const router = createBrowserRouter([
  {
    path: "/", // Ruta principal
    element: <App />, // Componente principal
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      }
    ]
  },
  {
    path: "*", // Ruta para cualquier otra URL no definida
    element: <NotFound />
  }
]);

export default router;
