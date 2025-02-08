import React from 'react';
import { Wrench, PenTool as Tool, Clock, Shield } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Konserwacja i Naprawy',
    description: 'Profesjonalne usługi konserwacyjne i naprawcze dla wszelkiego rodzaju maszyn do obróbki drewna.',
    features: [
      'Programy regularnej konserwacji',
      'Usługa naprawcza w sytuacjach awaryjnych',
      'Oryginalne części zamienne',
      'Ekspert techniczny'
    ]
  },
  {
    icon: Tool,
    title: 'Instalacja i Konfiguracja',
    description: 'Pełne usługi instalacyjne i konfiguracyjne dla nowych maszyn i systemów.',
    features: [
      'Profesjonalna instalacja',
      'Konfiguracja systemu',
      'Szkolenie personelu',
      'Testowanie wydajności'
    ]
  },
  {
    icon: Clock,
    title: 'Wsparcie Techniczne 24/7',
    description: 'Wsparcie techniczne przez cały czas, aby Twoje operacje działały gładko.',
    features: [
      'Zdalna diagnostyka',
      'Wsparcie telefoniczne',
      'Pomoc na miejscu',
      'Szybki czas reakcji'
    ]
  },
  {
    icon: Shield,
    title: 'Usługi Gwarancyjne',
    description: 'Kompleksowe pokrycie gwarancyjne i rozszerzone plany obsługi.',
    features: [
      'Naprawy gwarancyjne',
      'Opcje rozszerzonego pokrycia',
      'Zamiana części',
      'Wsparcie dokumentacyjne'
    ]
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" aria-label="Tytuł naszych usług">
            Nasze Usługi
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ofiarowujemy kompleksowe wsparcie techniczne i usługi konserwacyjne,
            aby Twoje maszyny działały z maksymalną wydajnością.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Service Process */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" aria-label="Proces naszych usług">
            Nasz Proces Obsługi
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Kontakt',
                description: 'Skontaktuj się z naszym zespołem obsługi'
              },
              {
                step: '02',
                title: 'Diagnoza',
                description: 'Oceniamy potrzeby Twojego wyposażenia'
              },
              {
                step: '03',
                title: 'Rozwiązanie',
                description: 'Ofierujemy szczegółowy plan obsługi'
              },
              {
                step: '04',
                title: 'Wykonanie',
                description: 'Profesjonalne dostarczanie usług'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-lg shadow-md p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Potrzebujesz wsparcia technicznego?</h2>
          <p className="text-xl mb-8">
            Nasz ekspert jest gotów Ci pomóc 24/7
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/kontakt"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Skontaktuj się z nami
            </a>
            <a
              href="tel:+48000000000"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Zadzwoń teraz
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;