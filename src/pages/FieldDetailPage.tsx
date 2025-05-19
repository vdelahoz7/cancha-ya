import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fieldsData } from '../data/fieldsData';
import Calendar from '../components/Calendar';
import TimeSlotPicker from '../components/TimeSlotPicker';
import { MapPin, Star, Calendar as CalendarIcon, Clock } from 'lucide-react';

const FieldDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const field = fieldsData.find(f => f.id === id);
  
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  
  // Mock time slots
  const availableSlots = [
    { time: '08:00', available: true },
    { time: '09:00', available: true },
    { time: '10:00', available: false },
    { time: '11:00', available: true },
    { time: '12:00', available: true },
    { time: '13:00', available: false },
    { time: '14:00', available: true },
    { time: '15:00', available: true },
    { time: '16:00', available: true },
    { time: '17:00', available: false },
    { time: '18:00', available: true },
    { time: '19:00', available: true },
    { time: '20:00', available: true },
    { time: '21:00', available: true },
    { time: '22:00', available: false },
  ];

  if (!field) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Cancha no encontrada</h2>
        <p className="mb-6">Lo sentimos, la cancha que estás buscando no existe.</p>
        <Link 
          to="/canchas" 
          className="bg-green-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Ver todas las canchas
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <div className="mb-6">
            <Link to="/canchas" className="text-green-600 hover:text-green-700 mb-4 inline-block">
              ← Volver a canchas
            </Link>
            <h1 className="text-3xl font-bold mb-2">{field.name}</h1>
            <div className="flex items-center gap-4 text-gray-600 mb-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-1" />
                {field.location}
              </div>
              <div className="flex items-center text-yellow-500">
                <Star className="h-5 w-5 fill-current mr-1" />
                <span>{field.rating}</span>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
            <img 
              src={field.image} 
              alt={field.name} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 text-green-600 font-bold shadow">
              ${field.price.toLocaleString()} / hora
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Características</h2>
            <div className="grid grid-cols-2 gap-4">
              {field.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Descripción</h2>
            <p className="text-gray-700">
              Disfruta de nuestras instalaciones de primera calidad. {field.name} cuenta 
              con {field.features.join(', ').toLowerCase()} para que disfrutes de la 
              mejor experiencia deportiva. Ubicada estratégicamente en {field.location}, 
              de fácil acceso y con todo lo necesario para tu comodidad.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold mb-4">Ubicación</h2>
            <div className="bg-gray-200 h-[300px] rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Mapa no disponible</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-6">Reservar cancha</h2>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Precio por hora</h3>
                <span className="text-xl font-bold text-green-600">${field.price.toLocaleString()}</span>
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                <span>{field.availability}</span>
              </div>
            </div>
            
            <Calendar 
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
            
            {selectedDate && (
              <TimeSlotPicker
                availableSlots={availableSlots}
                selectedSlot={selectedSlot}
                onSelectSlot={setSelectedSlot}
              />
            )}
            
            <button
              className={`w-full py-3 px-4 rounded-lg font-medium text-white mt-6 transition-colors ${
                selectedDate && selectedSlot
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
              disabled={!selectedDate || !selectedSlot}
            >
              Confirmar reserva
            </button>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              Al confirmar aceptas los términos y condiciones de reserva.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldDetailPage;