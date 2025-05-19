import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-full flex flex-col">
      <div className="flex items-center space-x-1 mb-3 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < testimonial.rating ? 'fill-current' : ''}`}
          />
        ))}
      </div>

      <p className="text-gray-700 italic mb-4 flex-grow">"{testimonial.comment}"</p>

      <div className="flex items-center mt-auto">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <span className="font-medium">{testimonial.name}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;