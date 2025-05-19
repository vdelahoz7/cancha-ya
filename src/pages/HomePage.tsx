import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { fieldsData } from '../data/fieldsData';
import { testimonialsData } from '../data/testimonialsData';
import FieldCard from '../components/FieldCard';
import TestimonialCard from '../components/TestimonialCard';
import { Search, Calendar as CalendarIcon, ArrowRight } from 'lucide-react';
import DatePicker from 'react-datepicker';

const HomePage: React.FC = () => {
  const featuredFields = fieldsData.slice(0, 3);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <>
      <div className="bg-cover bg-center h-[600px] flex items-center relative"
           style={{ 
             backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg)'
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
                to="/canchas" 
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Ver todas las canchas
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-4 -mt-20 relative z-20 mb-12">
          <form className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar por ubicación o nombre"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <DatePicker
                  selected={selectedDate}
                  onChange={(date: Date | null) => setSelectedDate(date)}
                  className="w-full py-3 ml-2 px-10 border border-gray-300 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholderText="Seleccionar fecha"
                  dateFormat="dd/MM/yyyy"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <CalendarIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Buscar
            </button>
          </form>
        </div>

        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Canchas destacadas</h2>
            <Link to="/canchas" className="text-green-600 hover:text-green-700 flex items-center">
              Ver todas <ArrowRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredFields.map(field => (
              <FieldCard key={field.id} field={field} />
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">¿Cómo funciona?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 text-green-600 w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Busca</h3>
              <p className="text-gray-600">Encuentra la cancha perfecta según ubicación, tamaño o características</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 text-green-600 w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Reserva</h3>
              <p className="text-gray-600">Selecciona fecha y hora, y confirma tu reserva en segundos</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 text-green-600 w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Juega</h3>
              <p className="text-gray-600">Preséntate en la cancha y disfruta de tu partido sin complicaciones</p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Lo que dicen nuestros clientes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-green-600 rounded-xl p-8 text-center text-white mb-16">
          <h2 className="text-3xl font-bold mb-4">¿Listo para jugar?</h2>
          <p className="text-xl mb-6">No pierdas tiempo buscando cancha. Reserva ahora y enfócate en lo que importa: ¡jugar al fútbol!</p>
          <Link 
            to="/canchas" 
            className="bg-white text-green-600 hover:bg-gray-100 font-medium px-6 py-3 rounded-lg inline-block transition-colors"
          >
            Reservar cancha
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;