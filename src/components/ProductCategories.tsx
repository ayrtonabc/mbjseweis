import React from 'react';
import { PenTool as Tool, Wind, Cog, Wrench } from 'lucide-react';

const categories = [
  {
    icon: Tool,
    title: 'New Machines',
    description: 'Latest woodworking machinery with cutting-edge technology',
  },
  {
    icon: Wind,
    title: 'Extraction Systems',
    description: 'Professional SAF extraction and filtration solutions',
  },
  {
    icon: Cog,
    title: 'Spare Parts',
    description: 'Original parts for all types of industrial machinery',
  },
  {
    icon: Wrench,
    title: 'Technical Services',
    description: 'Expert maintenance and repair services',
  },
];

const ProductCategories = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <category.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;