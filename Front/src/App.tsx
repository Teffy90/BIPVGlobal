// src/App.tsx
import { Outlet } from "react-router-dom"; // Esto renderizará las rutas hijas
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <Outlet /> {/* Aquí se renderizarán las rutas hijas */}
      </div>
    </div>
  );
};

export default App;
