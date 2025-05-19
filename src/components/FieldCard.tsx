import React from 'react';
import { Star, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Field } from '../types';

interface FieldCardProps {
  field: Field;
}

const FieldCard: React.FC<FieldCardProps> = ({ field }) => {
  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <img 
          src={field.image} 
          alt={field.name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 text-sm font-medium text-green-600 shadow-sm">
          ${field.price.toLocaleString()} / hora
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold">{field.name}</h3>
          <div className="flex items-center text-yellow-400">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 text-sm font-medium">{field.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-500 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{field.location}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {field.features.slice(0, 3).map((feature, index) => (
            <span 
              key={index}
              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
          {field.features.length > 3 && (
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
              +{field.features.length - 3} más
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-1 text-gray-500" />
            <span className={field.availability.includes('Disponible') ? 'text-green-600' : 'text-gray-500'}>
              {field.availability}
            </span>
          </div>
          
          <Link 
            to={`/canchas/${field.id}`}
            className="bg-green-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Reservar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FieldCard;