import React from 'react';
import { Search, Calendar, CheckCircle, Clock, MapPin, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorksPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">¿Cómo funciona?</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Reservar una cancha de fútbol nunca fue tan fácil. Sigue estos simples pasos 
          y prepárate para jugar.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        <div className="flex flex-col items-center">
          <div className="relative mb-6">
            <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center">
              <Search className="h-10 w-10 text-green-600" />
            </div>
            <div className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
              1
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-3">Busca</h2>
          <p className="text-center text-gray-600">
            Explora nuestra selección de canchas. Filtra por ubicación, 
            tipo de cancha, servicios o disponibilidad.
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="relative mb-6">
            <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center">
              <Calendar className="h-10 w-10 text-green-600" />
            </div>
            <div className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
              2
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-3">Reserva</h2>
          <p className="text-center text-gray-600">
            Selecciona la fecha y hora que prefieras y completa tu reserva en segundos.
            Recibe confirmación instantánea.
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="relative mb-6">
            <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <div className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
              3
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-3">Juega</h2>
          <p className="text-center text-gray-600">
            Llega a la cancha a la hora reservada, muestra tu confirmación y 
            disfruta de tu partido sin complicaciones.
          </p>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-2xl p-10 mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Ventajas de reservar con FútbolYA</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex">
            <div className="mr-4 text-green-600">
              <Clock className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Ahorra tiempo</h3>
              <p className="text-gray-600">
                Olvídate de llamadas telefónicas y visitas. Reserva en segundos desde cualquier dispositivo.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="mr-4 text-green-600">
              <MapPin className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Encuentra las mejores canchas</h3>
              <p className="text-gray-600">
                Accede a información detallada, fotos y opiniones para elegir la cancha ideal.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="mr-4 text-green-600">
              <CreditCard className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Pago seguro</h3>
              <p className="text-gray-600">
                Realiza pagos seguros y recibe confirmación instantánea de tu reserva.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="mr-4 text-green-600">
              <CheckCircle className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Garantía de cancha</h3>
              <p className="text-gray-600">
                Si hay algún problema con tu reserva, te ayudamos a resolverlo rápidamente.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">Preguntas frecuentes</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">¿Puedo cancelar mi reserva?</h3>
            <p className="text-gray-600">
              Sí, puedes cancelar tu reserva hasta 24 horas antes (plan básico) o hasta 6 horas antes 
              (plan premium) sin ningún cargo.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">¿Cómo recibo la confirmación de mi reserva?</h3>
            <p className="text-gray-600">
              Recibirás un correo electrónico con todos los detalles de tu reserva y un código QR 
              que podrás mostrar al llegar a la cancha.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">¿Qué pasa si llego tarde?</h3>
            <p className="text-gray-600">
              Recomendamos llegar 15 minutos antes. Si llegas tarde, tu tiempo de reserva 
              se verá reducido ya que las canchas operan en horarios fijos.
            </p>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-2">¿Puedo reservar canchas de forma recurrente?</h3>
            <p className="text-gray-600">
              Sí, con nuestros planes Premium y Pro puedes configurar reservas recurrentes 
              semanales o mensuales.
            </p>
          </div>
        </div>
        
        <Link 
          to="/contacto" 
          className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition-colors inline-block"
        >
          ¿Tienes más preguntas? Contáctanos
        </Link>
      </div>
    </div>
  );
};

export default HowItWorksPage;