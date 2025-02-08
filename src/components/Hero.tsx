import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-gray-900 to-gray-700">
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Video de fondo con filtro de color más oscuro y neutro */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 object-cover w-full h-full"
        style={{
          filter: 'brightness(0.4) contrast(1.1) saturate(0.5)', // Filtro para oscurecer y desaturar
        }}
      >
        <source src="/video.mp4" type="video/mp4" />
        Tu navegador no soporta la reproducción de video.
      </video>

      {/* Gradiente superior */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

      {/* Contenido principal */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white z-10">
          <h1 className="text-5xl font-bold mb-6">
          Rozwiązania przemysłowe dla Twojego sukcesu
          </h1>
          <p className="text-xl mb-8">
          Wiodący sprzedawca maszyn do obróbki drewna, systemów ekstrakcji oraz usług technicznych, oferujący maszyny nowe i po regeneracji.
          </p>
          <div className="flex space-x-4">
            <a
              href="/produkty"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Przeglądaj produkty
            </a>
            <a
              href="/kontakt"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Skontaktuj się z nami
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;