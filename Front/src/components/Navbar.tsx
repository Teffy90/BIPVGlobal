import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation(); // Obtiene la ubicación actual

  // Función para verificar si el enlace es el activo
  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-gray-600 text-white' : 'hover:text-gray-400';
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link to="/">MiApp</Link>
        </div>
        <ul className="flex space-x-4 text-white">
          <li>
            <Link to="/login" className={`p-2 rounded ${isActive('/login')}`}>
              Iniciar Sesión
            </Link>
          </li>
          <li>
            <Link to="/register" className={`p-2 rounded ${isActive('/register')}`}>
              Registrarse
            </Link>
          </li> 
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;