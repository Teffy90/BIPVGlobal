import { useState } from 'react';

export default function Login() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleMouseDown = () => {
    setShowPassword(true);
  };

  const handleMouseUp = () => {
    setShowPassword(false);
  };

  const handleMouseLeave = () => {
    setShowPassword(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md -mt-30">
        <h2 className="text-3xl font-bold text-center text-[#003A79]">Iniciar Sesión</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003A79]"
              placeholder="tuemail@ejemplo.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003A79]"
                placeholder="********"
              />
              <button
                type="button"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
              >
                {showPassword ? 'Ocultar' : 'Mostrar'}
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
              className="mr-2"
            />
            <label className="text-sm text-gray-600">Recordar contraseña</label>
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-[#003A79] rounded-md hover:bg-[#002A57] focus:outline-none focus:ring-2 focus:ring-[#609DE1]"
          >
            Iniciar Sesión
          </button>
        </form>
        <p className="text-center text-sm text-gray-600">
          ¿No tienes una cuenta? <a href="#" className="text-[#003A79] hover:underline">Regístrate</a>
        </p>
        <p className="text-center text-sm text-gray-600">
          ¿Olvidaste tu contraseña? <a href="#" className="text-[#003A79] hover:underline">Recuperar</a>
        </p>
      </div>
    </div>
  );
}