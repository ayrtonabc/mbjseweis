import React from 'react';
import { Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <img
                src="/logofooter.png"
                alt="Logo MBJ SERWIS"
                className="w-32 h-16 md:w-40 md:h-20 object-contain"
              />
            </div>
            <p className="text-sm">
            Wiodący dostawca maszyn przemysłowych i rozwiązań dla branży stolarskiej i meblarskiej.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Szybkie odnośniki</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-400">O nas</a></li>
              <li><a href="/products" className="hover:text-blue-400">Produkty</a></li>
              <li><a href="/services" className="hover:text-blue-400">Usługi</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Kontakt</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Informacje kontaktowe</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+48 000 000 000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>contact@mbjserwis.pl</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Warszawa, Polska</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Obserwuj nas</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} MBJ SERWIS. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-sm hover:text-blue-400">Polityka prywatności</a>
              <a href="/terms" className="text-sm hover:text-blue-400">Warunki korzystania</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;