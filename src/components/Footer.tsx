import React from 'react';
import {
    Shield as SoccerField,
    Facebook,
    Instagram,
    Twitter,
    Mail,
    Phone,
    MapPin,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.jpeg"



export const Footer: React.FC = () => {
    const quickLinks: { name: string; href: string }[] = [
        { name: 'Inicio', href: '/' },
        { name: 'Canchas', href: '/canchas' },
        { name: 'Cómo funciona', href: '/como-funciona' },
        { name: 'Precios', href: '/precios' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contacto', href: '/contacto' },
    ];

    return (
        <footer className="bg-gray-900 text-white w-full">
            <div className="container mx-auto px-4 sm:px-6 py-12 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div>
                        <div className="mb-4">
                            <img
                                src={Logo}
                                alt="FútbolYA"
                                className="h-10 w-auto"
                            />
                        </div>
                        <p className="text-gray-400 mb-6">
                            La forma más sencilla de encontrar y reservar canchas de fútbol en tu ciudad.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Enlaces rápidos</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.href} className="text-gray-400 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contacto</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5 shrink-0" />
                                <span className="text-gray-400">Av. Principal 123, Ciudad</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 text-gray-400 mr-2 shrink-0" />
                                <span className="text-gray-400">+123 456 7890</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 text-gray-400 mr-2 shrink-0" />
                                <span className="text-gray-400">info@futbolya.com</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Suscríbete</h3>
                        <p className="text-gray-400 mb-4">
                            Recibe nuestras novedades y promociones especiales.
                        </p>

                    </div>
                </div>
                <div className="border-tborder-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} FútbolYA. Todos los derechos reservados.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                            Términos y condiciones
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                            Política de privacidad
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
