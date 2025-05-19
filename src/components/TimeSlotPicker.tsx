import React from 'react';
import { CheckCircle } from 'lucide-react';

interface TimeSlotPickerProps {
  availableSlots: { time: string; available: boolean }[];
  selectedSlot: string | null;
  onSelectSlot: (time: string) => void;
}

const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({
  availableSlots,
  selectedSlot,
  onSelectSlot,
}) => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-4">Horarios disponibles</h3>
      <div className="grid grid-cols-3 gap-3">
        {availableSlots.map((slot) => (
          <button
            key={slot.time}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
              ${slot.available 
                ? selectedSlot === slot.time
                  ? 'bg-green-600 text-white' 
                  : 'bg-white border border-gray-300 hover:border-green-600 text-gray-700'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            onClick={() => slot.available && onSelectSlot(slot.time)}
            disabled={!slot.available}
          >
            {slot.time}
            {selectedSlot === slot.time && (
              <CheckCircle className="inline-block ml-1 h-4 w-4" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSlotPicker;