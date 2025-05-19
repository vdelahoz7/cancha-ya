import React from 'react';
import { CheckCircle } from 'lucide-react';
import { PricePlan } from '../types';

interface PricingCardProps {
  plan: PricePlan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 ${
      plan.popular ? 'border-2 border-green-500 relative' : 'border border-gray-200'
    }`}>
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 text-sm font-medium">
          Popular
        </div>
      )}
      
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
        
        <div className="mt-4 mb-6">
          <span className="text-4xl font-bold">
            {plan.price === 0 ? 'Gratis' : `$${plan.price.toLocaleString()}`}
          </span>
          {plan.price > 0 && (
            <span className="text-gray-500 ml-2">/{plan.period}</span>
          )}
        </div>
        
        <button 
          className={`w-full py-3 rounded-lg font-medium transition-colors ${
            plan.popular 
              ? 'bg-green-600 text-white hover:bg-green-700' 
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          Comenzar {plan.price === 0 ? 'gratis' : 'ahora'}
        </button>
      </div>
      
      <div className="p-6 bg-gray-50 border-t border-gray-100">
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;