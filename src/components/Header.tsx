import React, { useState, useRef, useEffect } from 'react';
import { Menu, Phone, Mail, MapPin, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Cerrar el menú móvil al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full bg-white shadow-md">
      {/* Top bar with contact info */}
      <div className="hidden md:flex justify-end items-center bg-blue-600 text-white px-6 py-1 space-x-6">
        <a href="tel:+48000000000" className="flex items-center space-x-2 hover:text-blue-100 transition-colors duration-300">
          <Phone size={16} />
          <span>+48 000 000 000</span>
        </a>
        <a href="mailto:contact@mbjserwis.pl" className="flex items-center space-x-2 hover:text-blue-100 transition-colors duration-300">
          <Mail size={16} />
          <span>contact@mbjserwis.pl</span>
        </a>
        <div className="flex items-center space-x-2 hover:text-blue-100 transition-colors duration-300">
          <MapPin size={16} />
          <span>Warszawa, Polska</span>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Logo MBJ SERWIS"
              className="w-32 h-16 md:w-40 md:h-20 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">Strona główna</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">O nas</a>
            <a href="/products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">Produkty</a>
            <a href="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">Usługi</a>
            <a href="/location" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">Lokalizacja</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">Kontakt</a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            ref={menuRef}
            className="md:hidden mt-4 space-y-4 p-4 bg-white shadow-lg rounded-md"
          >
            <a href="/" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">Strona główna</a>
            <a href="/about" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">O nas</a>
            <a href="/products" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">Produkty</a>
            <a href="/services" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">Usługi</a>
            <a href="/location" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">Lokalizacja</a>
            <a href="/contact" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">Kontakt</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;