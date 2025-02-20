import React from 'react';

const InfoGeneral: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#003A79]">Bienvenido a BIPV Global</h1>
        <p className="mt-2 text-lg text-gray-600">Estimaciones precisas para la instalación de tecnología BIPV.</p>
      </header>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-[#003A79]">¿Qué es este aplicativo?</h2>
        <p className="mt-2 text-gray-700">
          Esta aplicación te permite calcular los costos de instalación de tecnología BIPV (Building Integrated Photovoltaics) 
          mediante la recopilación de información sobre tu ubicación, tipo de techo o fachada, área y otros factores relevantes.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-[#003A79]">Características principales</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>🔍 Estimaciones de costos en función de tus datos específicos.</li>
          <li>📊 Proyecciones de generación de energía y retorno de inversión.</li>
          <li>📈 Informes para ayudarte a tomar decisiones.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-[#003A79]">¿Cómo usarlo?</h2>
        <p className="mt-2 text-gray-700">Para comenzar, sigue estos pasos:</p>
        <ol className="list-decimal list-inside mt-2 text-gray-700">
          <li>Regístrate en la aplicación proporcionando tus datos personales.</li>
          <li>Inicia sesión en tu cuenta con tu correo electrónico y contraseña.</li>
          <li>Completa el formulario con tu ubicación y características del proyecto.</li>
          <li>Recibe una estimación de costos y generación de energía basada en la información proporcionada.</li>
          <li>Analiza los resultados para evaluar la viabilidad de tu proyecto.</li>
        </ol>
      </section>

      <footer className="text-center mt-8">
        <p className="text-[#6B7073] text-sm">© 2025 BIPV Global. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default InfoGeneral;