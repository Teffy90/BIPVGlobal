import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" text-white text-xl font-bold">
          <Link to="/">MiApp</Link>
        </div>
        <ul className="flex space-x-4 text-white">
          <li>
            <Link to="/login" className="hover:text-gray-400">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="hover:text-gray-400">
              Register
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
