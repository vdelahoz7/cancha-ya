import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import {Footer} from "./Footer";
import Logo from "../assets/logo.jpeg"

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Canchas', href: '/canchas' },
    { name: 'Cómo funciona', href: '/como-funciona' },
    { name: 'Precios', href: '/precios' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <>
      <nav 
        className={`top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-900 py-4 `}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img
                  src={Logo}
                  alt="Cancha YA logo"
                  className="h-10 w-auto"
              />
            </Link>

            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-3 py-2 rounded text-sm font-medium hover:text-gray-700 hover:bg-white transition-colors text-white `}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link 
                to="/login"
                className={`px-4 py-2 rounded-lg font-medium transition-colors text-white hover:bg-gray-100`}
              >
                Iniciar sesión
              </Link>
              <Link 
                to="/register"
                className={`px-4 py-2 rounded-lg font-medium transition-colors bg-green-600 text-white hover:bg-green-700`}
              >
                Registrarse
              </Link>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg ${
                  isScrolled ? "text-gray-700" : "text-gray-700"
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-2 py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block px-3 py-2 rounded text-gray-700 font-medium hover:bg-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 space-y-2">
                <Link
                  to="/login"
                  className="block px-4 py-2 text-center rounded-lg font-medium text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Iniciar sesión
                </Link>
                <Link
                  to="/register"
                  className="block px-4 py-2 text-center rounded-lg font-medium text-white bg-green-600 hover:bg-green-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Registrarse
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main>
        {children}
      </main>

      <Footer/>
    </>
  );
};

export default Layout;