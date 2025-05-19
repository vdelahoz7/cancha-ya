import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="bg-cover bg-center h-[600px] flex items-center relative" 
         style={{ 
           backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg)'
         }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-4">
            Reserva tu cancha de fútbol en línea
          </h1>
          <p className="text-xl mb-8">
            Encuentra las mejores canchas de la ciudad y reserva en 
            segundos. ¡Juega cuando quieras!
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/canchas" 
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Reservar ahora
            </Link>
            <Link 
              to="/como-funciona" 
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Ver todas las canchas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;