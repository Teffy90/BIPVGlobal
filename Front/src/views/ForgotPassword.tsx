// src/views/ForgotPassword.tsx
import React, { useState } from 'react';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //lógica para enviar el correo de recuperación
    console.log('Recuperar contraseña para:', email);
    alert('Se ha enviado un correo de recuperación a ' + email);
  };

  return (
    <div className="h-screen flex items-center justify-center"> 
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md -mt-20"> 
        <h2 className="text-3xl font-bold text-center mb-4 text-[#003A79]">Recuperar Contraseña</h2>
        <form onSubmit={handleSubmit}>
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
          <button
            type="submit"
            className="w-full bg-[#003A79] text-white font-bold py-2 rounded-md hover:bg-[#002A57]"
          >
            Enviar Correo de Recuperación
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;