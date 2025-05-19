import React from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Calendar as CalendarIcon } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

interface CalendarProps {
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
}

const Calendar: React.FC<CalendarProps> = ({ selected, onSelect }) => {
  const today = new Date();
  const footer = selected ? (
    <p className="mt-4 text-sm text-center font-medium">
      Has seleccionado {format(selected, 'PPP', { locale: es })}.
    </p>
  ) : (
    <p className="mt-4 text-sm text-center text-gray-500">
      Selecciona una fecha para tu reserva.
    </p>
  );

  return (
    <div className="calendar-container bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Seleccionar fecha</h3>
        <CalendarIcon className="h-5 w-5 text-gray-500" />
      </div>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={onSelect}
        locale={es}
        fromDate={today}
        toDate={new Date(today.getFullYear(), today.getMonth() + 2, 0)}
        footer={footer}
        className="custom-day-picker"
        styles={{
          caption: { color: '#059669' },
          day: { margin: '0.2em' },
          nav: { display: 'flex', justifyContent: 'space-between' },
        }}
        modifiersStyles={{
          selected: {
            backgroundColor: '#059669',
            color: 'white',
            fontWeight: 'bold',
          },
          today: {
            color: '#059669',
            fontWeight: 'bold',
          },
        }}
      />
    </div>
  );
};

export default Calendar;