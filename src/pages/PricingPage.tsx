import React from 'react';
import { pricingData } from '../data/pricingData';
import PricingCard from '../components/PricingCard';
import { CheckCircle } from 'lucide-react';

const PricingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Planes y precios</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Elige el plan que mejor se adapte a tus necesidades. Mejora tu experiencia con características premium.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
        {pricingData.map(plan => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Comparación de planes</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="py-4 px-6 text-left">Características</th>
                <th className="py-4 px-6 text-center">Básico</th>
                <th className="py-4 px-6 text-center bg-green-50">Premium</th>
                <th className="py-4 px-6 text-center">Pro</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-6">Reserva de canchas</td>
                <td className="py-4 px-6 text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center bg-green-50">
                  <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Cancelación anticipada</td>
                <td className="py-4 px-6 text-center">24h antes</td>
                <td className="py-4 px-6 text-center bg-green-50">6h antes</td>
                <td className="py-4 px-6 text-center">2h antes</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Descuentos exclusivos</td>
                <td className="py-4 px-6 text-center">-</td>
                <td className="py-4 px-6 text-center bg-green-50">10%</td>
                <td className="py-4 px-6 text-center">15%</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Reservas prioritarias</td>
                <td className="py-4 px-6 text-center">-</td>
                <td className="py-4 px-6 text-center bg-green-50">
                  <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Reservas de último minuto</td>
                <td className="py-4 px-6 text-center">-</td>
                <td className="py-4 px-6 text-center bg-green-50">-</td>
                <td className="py-4 px-6 text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Torneos exclusivos</td>
                <td className="py-4 px-6 text-center">-</td>
                <td className="py-4 px-6 text-center bg-green-50">-</td>
                <td className="py-4 px-6 text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6">Servicio de soporte</td>
                <td className="py-4 px-6 text-center">Email</td>
                <td className="py-4 px-6 text-center bg-green-50">24/7 prioritario</td>
                <td className="py-4 px-6 text-center">24/7 VIP</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Preguntas frecuentes sobre precios</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-2">¿Cómo selecciono un plan?</h3>
            <p className="text-gray-600">
              Puedes seleccionar un plan desde esta página haciendo clic en el botón "Comenzar" 
              del plan que prefieras. Si ya tienes una cuenta, primero deberás iniciar sesión.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-2">¿Puedo cambiar de plan más adelante?</h3>
            <p className="text-gray-600">
              Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se aplicarán 
              al inicio del siguiente ciclo de facturación.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-2">¿Hay algún contrato o permanencia mínima?</h3>
            <p className="text-gray-600">
              No, nuestros planes son mensuales y puedes cancelar en cualquier momento. No hay 
              compromisos a largo plazo ni penalizaciones por cancelación.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-2">¿Ofrecen planes corporativos?</h3>
            <p className="text-gray-600">
              Sí, tenemos planes especiales para empresas y organizaciones. Contáctanos para 
              recibir una cotización personalizada según tus necesidades.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;