import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">O MBJ SERWIS</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          
            <p className="text-gray-600 mb-6">
            MBJ SERWIS jest wiodącym dostawcą maszyn przemysłowych i rozwiązań dla branży stolarskiej i meblarskiej. Dzięki wieloletniemu doświadczeniu i zaangażowaniu w jakość, staliśmy się zaufanym partnerem dla firm w Polsce i poza jej granicami.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nasza Misja</h2>
            <p className="text-gray-600 mb-6">
            Nasza Misja  
            Jesteśmy zaangażowani w dostarczanie wysokiej jakości maszyn, ekspertyzy technicznej oraz innowacyjnych rozwiązań, które wspierają naszych klientów w optymalizacji procesów produkcyjnych i realizacji ich celów biznesowych.            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nasze Wartości</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-2">Jakość</h3>
                <p className="text-blue-800">Utrzymujemy najwyższe standardy we wszystkich naszych produktach i usługach.</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-2">Innowacja</h3>
                <p className="text-blue-800">Ciągle poszukujemy nowych rozwiązań na wyzwania branżowe.</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-2">Niezawodność</h3>
                <p className="text-blue-800">Tworzymy trwałe relacje dzięki niezawodnej obsłudze.</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Dlaczego Wybrać Nas</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Ekspertna Wiedza</h3>
                  <p className="text-gray-600">Lata doświadczenia i techniczna ekspertyza pozwalają nam oferować rozwiązania dopasowane do Twoich potrzeb.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Produkty Wysokiej Jakości</h3>
                  <p className="text-gray-600">Współpracujemy z czołowymi producentami, dostarczając sprawdzone i niezawodne maszyny.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Kompleksowa Obsługa</h3>
                  <p className="text-gray-600">Zapewniamy pełne wsparcie – od instalacji po konserwację – na każdym etapie użytkowania.

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

export default AboutPage;