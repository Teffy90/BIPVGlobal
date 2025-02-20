import React from 'react';

const InfoGeneral: React.FC = () => {
  return (
    <div>
      <h1>Bienvenido a [Nombre del Aplicativo]</h1>
      <p>Poner una breve descripción del aplicativo.</p>
      
      <h2>¿Qué es este aplicativo?</h2>
      <p>Este aplicativo te permite hacer [descripción breve de las funcionalidades del aplicativo].</p>

      <h2>Características principales</h2>
      <ul>
        <li>Característica 1</li>
        <li>Característica 2</li>
        <li>Característica 3</li>
      </ul>

      <h2>¿Cómo usarlo?</h2>
      <p>Explicación básica de los pasos para usar la aplicación.</p>
    </div>
  );
};

export default InfoGeneral;
