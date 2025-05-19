import React, { useState } from 'react';
import { Search, Calendar } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string, date?: Date) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, selectedDate);
  };

  const formatDate = (date?: Date) => {
    if (!date) return '';
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 -mt-24 relative z-20 mb-12">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar por ubicación o nombre"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        
        <div className="relative">
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 cursor-pointer"
               onClick={() => setShowCalendar(!showCalendar)}>
            <Calendar className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-gray-700">
              {selectedDate ? formatDate(selectedDate) : 'Seleccionar fecha'}
            </span>
          </div>
          
          {showCalendar && (
            <div className="absolute mt-2 right-0 z-50">
            
            </div>
          )}
        </div>
        
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

export default SearchBar;