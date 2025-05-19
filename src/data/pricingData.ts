import { PricePlan } from '../types';

export const pricingData: PricePlan[] = [
  {
    id: '1',
    name: 'Básico',
    price: 0,
    period: 'mes',
    features: [
      'Reserva de canchas',
      'Cancelación hasta 24h antes',
      'Búsqueda de canchas disponibles',
      'Soporte básico por email'
    ]
  },
  {
    id: '2',
    name: 'Premium',
    price: 29900,
    period: 'mes',
    popular: true,
    features: [
      'Todo lo del plan Básico',
      'Reservas prioritarias',
      'Cancelación hasta 6h antes',
      'Descuentos exclusivos (10%)',
      'Soporte prioritario 24/7'
    ]
  },
  {
    id: '3',
    name: 'Pro',
    price: 49900,
    period: 'mes',
    features: [
      'Todo lo del plan Premium',
      'Reservas de último minuto',
      'Cancelación hasta 2h antes',
      'Descuentos exclusivos (15%)',
      'Torneos exclusivos',
      'Servicio de armado de equipos'
    ]
  }
];