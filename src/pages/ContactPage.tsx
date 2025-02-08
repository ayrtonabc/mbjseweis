import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Skontaktuj się z nami</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Nawiąż kontakt</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Zadzwoń do nas</h3>
                      <p className="text-gray-600">+48 000 000 000</p>
                      <p className="text-sm text-gray-500">Poniedziałek - Piątek, 8:00 - 18:00</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Wyślij nam e-mail</h3>
                      <p className="text-gray-600">contact@mbjserwis.pl</p>
                      <p className="text-sm text-gray-500">Odpowiemy w ciągu 24 godzin</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MessageSquare className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Czat online</h3>
                      <p className="text-gray-600">Porozmawiaj z naszym zespołem wsparcia</p>
                      <p className="text-sm text-gray-500">Dostępne podczas godzin pracy</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-600 rounded-lg shadow-lg p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Wsparcie Awaryjne</h2>
                <p className="mb-4">
                  Potrzebujesz pilnej pomocy technicznej? Nasza linia wsparcia awaryjnego jest dostępna 24/7.
                </p>
                <a
                  href="tel:+48000000000"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Skontaktuj się z pomocą techniczną
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Wyślij nam wiadomość</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Adres e-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="jan@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Temat
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Jak możemy pomóc?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Twoja wiadomość..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;