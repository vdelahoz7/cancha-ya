import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, MessageSquare } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Contacto</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          ¿Tienes preguntas o necesitas ayuda? Estamos aquí para ti. 
          Contáctanos por cualquiera de estos medios.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
        <div>
          <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
          
          {submitted ? (
            <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
              ¡Gracias por tu mensaje! Te responderemos a la brevedad.
            </div>
          ) : null}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Nombre completo
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Correo electrónico
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                Asunto
              </label>
              <select 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              >
                <option value="">Selecciona un asunto</option>
                <option value="reservas">Problemas con reservas</option>
                <option value="cuenta">Consultas sobre cuenta</option>
                <option value="pagos">Pagos y facturación</option>
                <option value="sugerencias">Sugerencias</option>
                <option value="otros">Otros</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Mensaje
              </label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                rows={6} 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition-colors flex items-center"
            >
              Enviar mensaje
              <Send className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
          
          <div className="bg-white shadow-sm rounded-xl p-6 mb-8">
            <div className="flex flex-col space-y-6">
              <div className="flex">
                <div className="bg-green-100 text-green-600 rounded-full p-3 mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Dirección</h3>
                  <p className="text-gray-600">Av. Principal 123, Ciudad</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="bg-green-100 text-green-600 rounded-full p-3 mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Teléfono</h3>
                  <p className="text-gray-600">+123 456 7890</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="bg-green-100 text-green-600 rounded-full p-3 mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-gray-600">info@futbolya.com</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="bg-green-100 text-green-600 rounded-full p-3 mr-4">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Chat en vivo</h3>
                  <p className="text-gray-600">
                    Disponible de lunes a viernes de 9:00 a 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-200 h-[300px] rounded-lg mb-6 flex items-center justify-center">
            <p className="text-gray-500">Mapa no disponible</p>
          </div>
          
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-gray-600">
              Horario de atención: Lunes a Viernes de 9:00 a 18:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;