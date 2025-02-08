import React, { useState } from 'react';
import { Filter, ArrowRight, Package, PenTool as Tool, Wind, Wrench, Search } from 'lucide-react';

const categories = [
  { id: 'new', name: 'Maszyny nowe', icon: Package },
  { id: 'used', name: 'Maszyny używane', icon: Tool },
  { id: 'extraction', name: 'Systemy odpylania', icon: Wind },
  { id: 'parts', name: 'Części zamienne', icon: Wrench },
];

const products = [
  {
    category: 'new',
    items: [
      {
        "title": "Emc Smart 300",
        "image": "/products/1.png",
        "description": "Frezarka CNC z 5-osiową kinematyką, idealna dla precyzyjnej obróbki drewna i innych materiałów. Wyposażona w zaawansowany system sterowania CAD/CAM.",
        "features": ["5-osiowa kinematyka", "Interfejs CNC z obsługą CAD/CAM", "Automatyczna kalibracja narzędzi"],
        "price": "Od 45 000 EUR",
        "condition": "Nowe"
      },
      {
        "title": "Scheer PA 4136",
        "image": "/products/2.jpg",
        "description": "Wysokoprofesjonalna oklejarka krawędziowa, zaprojektowana do szybkiego i precyzyjnego oklejania mebli różnorodnymi materiałami. Idealna dla produkcji masowej.",
        "features": ["System automatycznego regulowania temperatury", "Obsługa materiałów o różnych grubościach", "Programowalne cykle pracy"],
        "price": "Od 32 000 EUR",
        "condition": "Nowe"
      },
      {
        "title": "Timbermax 5-23 U",
        "image": "/products/3.jpg",
        "description": "Pilarka panelowa z wysoką dokładnością cięcia, doskonała do produkcji elementów drewnianych o standardzie fabrycznym. Wspiera pracę z dużymi płytami.",
        "features": ["Precyzyjny system pomiarowy laserowy", "Zabezpieczenia przeciwko przegrzewaniu", "Możliwość cięcia pod różnymi kątami"],
        "price": "Od 28 000 EUR",
        "condition": "Nowe"
      },
      {
        "title": "Mb-630",
        "image": "/products/4.avif",
        "description": "Przemysłowa strugarka do drewna, zapewniająca gładkie powierzchnie nawet na dużych gabarytach materiału. Idealna dla produkcji meblarskiej i budowlanej.",
        "features": ["Regulowane ostrza z wysokiej jakości stali", "Duże wymiary robocze", "Automatyczne centrowanie materiału"],
        "price": "Od 18 000 EUR",
        "condition": "Nowe"
      }
    ]
  },
  {
    category: 'used',
    items: [
      {
        "title": "HOMAG BFM 260",
        "image": "/products/5.jpg",
        "description": "Profesionalna frezarka CNC do obróbki drewna, idealna dla produkcji mebli i elementów dekoracyjnych. Zawiera zaawansowane funkcje sterowania.",
        "features": ["4-osiowa kinematyka", "System automatycznego wymiany narzędzi", "Obsługa płyt o dużych gabarytach"],
        "price": "Od 30 000 EUR",
        "condition": "Używane"
      },
      {
        "title": "SCM Prisma 125",
        "image": "/products/6.jpg",
        "description": "Wysoce produkcyjna strugarka do drewna, zaprojektowana dla przemysłu meblarskiego. Zapewnia gładkie powierzchnie i precyzyjne wyniki.",
        "features": ["Potężny silnik 7,5 kW", "Precyzyjna regulacja głębokości strugania", "Możliwość obsługi szerokich płyt"],
        "price": "Od 15 000 EUR",
        "condition": "Używane"
      }
    ]
  },
  {
    category: 'parts',
    items: [
      {
        "title": "Waleczkowe Łozy dla Silników Przemysłowych",
        "image": "/products/7.jpg",
        "description": "Waleczkowe loża wysokiej precyzji zaprojektowane do wytrzymywania dużych obciążeń i wysokich prędkości w silnikach przemysłowych.",
        "features": ["Wykonane z nierdzewnej stali", "Odporne na zużycie", "Kompatybilne z większością marek maszyn"],
        "price": "Od 49€",
        "condition": "Nowe"
      },
      {
        "title": "Pasy Trapezowe do Przekładni",
        "image": "/products/8.jpg",
        "description": "Pasy trapezowe najwyższej jakości do przekładni mechanicznych w maszynach przemysłowych. Zapewniają efektywną transmisję mocy.",
        "features": ["Wykonane z gumy wzmacnianej włóknami poliestrowymi", "Odporność na wysokie temperatury", "Dostępne w różnych rozmiarach"],
        "price": "Od 29€",
        "condition": "Nowe"
      },
      {
        "title": "Kontrolery Numeryczne ",
        "image": "/products/9.jpg",
        "description": "Zaawansowane kontrolery numeryczne dla maszyn CNC, zapewniające precyzyjne sterowanie i programowanie.",
        "features": ["Interfejs użytkownika z dotykowym ekranem", "Obsługa plików CAD/CAM", "Wysoka szybkość przetwarzania"],
        "price": "Od 399€",
        "condition": "Nowe"
      }
    ]
  }
];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCondition, setSelectedCondition] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = React.useMemo(() => {
    let filteredItems = [];

    // Si la categoría es 'all', incluir todos los productos
    if (selectedCategory === 'all') {
      products.forEach(category => {
        filteredItems = [...filteredItems, ...category.items];
      });
    } else {
      // Si se selecciona una categoría específica, filtrar por esa categoría
      const categoryProducts = products.find(cat => cat.category === selectedCategory);
      if (categoryProducts) {
        filteredItems = [...categoryProducts.items];
      }
    }

    // Aplicar filtro por condición
    if (selectedCondition !== 'all') {
      filteredItems = filteredItems.filter(item => {
        const itemCondition = item.condition;
        return itemCondition === selectedCondition;
      });
    }

    // Aplicar búsqueda por texto
    if (searchQuery) {
      filteredItems = filteredItems.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filteredItems;
  }, [selectedCategory, selectedCondition, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Wyszukaj produkty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Side Menu */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
              <h3 className="text-lg font-semibold mb-4">Kategorie</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full text-left px-4 py-2 rounded-lg flex items-center space-x-2 ${
                      selectedCategory === 'all'
                        ? 'bg-blue-600 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <Filter className="w-5 h-5" />
                    <span>Wszystkie produkty</span>
                  </button>
                </li>
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg flex items-center space-x-2 ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <category.icon className="w-5 h-5" />
                      <span>{category.name}</span>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Stan</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setSelectedCondition('all')}
                      className={`w-full text-left px-4 py-2 rounded-lg ${
                        selectedCondition === 'all'
                          ? 'bg-blue-600 text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      Wszystkie stany
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setSelectedCondition('Nowe')}
                      className={`w-full text-left px-4 py-2 rounded-lg ${
                        selectedCondition === 'Nowe'
                          ? 'bg-blue-600 text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      Nowe
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setSelectedCondition('Używane')}
                      className={`w-full text-left px-4 py-2 rounded-lg ${
                        selectedCondition === 'Używane'
                          ? 'bg-blue-600 text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      Używane
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-900">
                        {product.title}
                      </h3>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        product.condition === 'Nowe' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {product.condition}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                    <ul className="space-y-2 mb-4">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <svg
                            className="w-4 h-4 text-green-500 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-900">
                        {product.price}
                      </span>
                      <a
                        href={`/products/${product.title
                          .toLowerCase()
                          .replace(/\s+/g, '-')}`}
                        className="inline-flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700"
                      >
                        <span>Szczegóły</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;