import React, { useState } from 'react';

const Register: React.FC = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden!');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/register', { //Cambiar de acuerdo al backend
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullname,
          email,
          password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Registro exitoso!');
      } else {
        alert(data.message || 'Error en el registro');
      }
    } catch (error) {
      console.error('Error al registrarse:', error);
      alert('Error al registrarse');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md -mt-20">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#003A79]">Registro</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Nombre Completo</label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirmar Contraseña</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#003A79] text-white font-bold py-2 rounded-md hover:bg-[#002A57]"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;