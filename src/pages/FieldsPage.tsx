import React, { useState } from 'react';
import { fieldsData } from '../data/fieldsData';
import FieldCard from '../components/FieldCard';
import SearchBar from '../components/SearchBar';
import { Filter, ChevronDown } from 'lucide-react';

const FieldsPage: React.FC = () => {
  const [filteredFields, setFilteredFields] = useState(fieldsData);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: [0, 100000],
    fieldType: [] as string[],
    playerCount: [] as string[],
    amenities: [] as string[],
    availability: 'all',
    sort: 'relevance',
  });

  const handleSearch = (query: string, date?: Date) => {
    let filtered = fieldsData;
    
    if (query) {
      const searchTerms = query.toLowerCase();
      filtered = filtered.filter(
        field => 
          field.name.toLowerCase().includes(searchTerms) || 
          field.location.toLowerCase().includes(searchTerms)
      );
    }
    
    // Here you would normally filter by date as well
    
    setFilteredFields(filtered);
  };

  const handleFilterChange = (filterType: string, value: any) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
    
    // Apply filters (in a real app, this would be more sophisticated)
    let filtered = fieldsData;
    
    // Filter by availability if needed
    if (filters.availability === 'available') {
      filtered = filtered.filter(field => field.availability.includes('Disponible'));
    }
    
    // Sort fields
    switch(filters.sort) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
    }
    
    setFilteredFields(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Canchas de fútbol</h1>
      
      <SearchBar onSearch={handleSearch} />
      
      <div className="mb-6 flex flex-wrap justify-between items-center">
        <button 
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="h-5 w-5" />
          Filtros
          <ChevronDown className={`h-4 w-4 transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
        </button>
        
        <div className="mt-4 sm:mt-0">
          <select 
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
            value={filters.sort}
            onChange={(e) => handleFilterChange('sort', e.target.value)}
          >
            <option value="relevance">Relevancia</option>
            <option value="price-low">Precio: de menor a mayor</option>
            <option value="price-high">Precio: de mayor a menor</option>
            <option value="rating">Mejor calificación</option>
          </select>
        </div>
      </div>
      
      {showFilters && (
        <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium mb-3">Disponibilidad</h3>
              <select 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                value={filters.availability}
                onChange={(e) => handleFilterChange('availability', e.target.value)}
              >
                <option value="all">Todas</option>
                <option value="available">Disponibles hoy</option>
              </select>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Tipo de cancha</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Césped sintético</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Césped natural</span>
                </label>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Servicios</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Iluminación</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Vestuarios</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Estacionamiento</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Cafetería</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFields.map(field => (
          <FieldCard key={field.id} field={field} />
        ))}
      </div>
    </div>
  );
};

export default FieldsPage;