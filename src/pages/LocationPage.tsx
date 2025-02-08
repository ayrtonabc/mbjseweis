import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const LocationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Nasz adres</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informacje kontaktowe</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Adres</h3>
                    <p className="text-gray-600">
                      ul. Przykładowa 123<br />
                      00-000 Warszawa<br />
                      Polska
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Telefon</h3>
                    <p className="text-gray-600">+48 000 000 000</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">E-mail</h3>
                    <p className="text-gray-600">contact@mbjserwis.pl</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Godziny otwarcia</h3>
                    <p className="text-gray-600">
                      Poniedziałek - Piątek: 8:00 - 18:00<br />
                      Sobota: 9:00 - 14:00<br />
                      Niedziela: Zamknięte
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Jak nas znaleźć</h2>
              
              <div className="aspect-w-16 aspect-h-9 mb-6">
                {/* Zastąp rzeczywistym widokiem mapy */}
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Widok mapy</span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-gray-900">Instrukcje dojazdu</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-semibold">Samochodem:</span> Łatwy dostęp z głównej autostrady, parking dostępny na miejscu.
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Komunikacją publiczną:</span> Przystanki autobusowe w pobliżu (Linie: 123, 456).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;