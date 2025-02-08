import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail } from 'lucide-react';

// Imágenes de ejemplo para el carrusel
const productImages = [
  '/products/10.jpg',
  '/products/11.jpeg',
  '/products/12.webp',
];

const ProductDetail = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Datos genéricos del producto
  const product = {
    title: 'Produkt Przykładowy', // Producto de Ejemplo en polaco
    price: 'Cena demonstracyjna: 999€',
    description: 'To jest produkt przykładowy przeznaczony wyłącznie do prezentacji. Dane techniczne i opis są fikcyjne.',
    features: ['Funkcja demonstracyjna 1', 'Funkcja demonstracyjna 2', 'Funkcja demonstracyjna 3'],
    specifications: [
      { label: 'Parametr 1', value: 'Wartość demonstracyjna' },
      { label: 'Parametr 2', value: 'Wartość demonstracyjna' },
      { label: 'Parametr 3', value: 'Wartość demonstracyjna' },
    ],
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Carrusel de imágenes */}
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 relative">
                <img
                  src={productImages[currentImage]}
                  alt={`Zdjęcie produktu ${currentImage + 1}`}
                  className="w-full h-[500px] object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              <div className="flex justify-center mt-4 space-x-2">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentImage === index ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            {/* Información del producto */}
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
              <div className="mb-6">
                <span className="text-2xl font-bold text-blue-600">{product.price}</span>
              </div>
              <p className="text-gray-600 mb-8">{product.description}</p>
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Główne funkcje</h2>
                <ul className="grid grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0"
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
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t pt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Specyfikacja techniczna</h2>
                <div className="grid grid-cols-2 gap-4">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">{spec.label}</p>
                      <p className="font-semibold text-gray-900">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Kontakt z sprzedżą</span>
                </button>
                <button className="w-full border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Żądaj informacji</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;