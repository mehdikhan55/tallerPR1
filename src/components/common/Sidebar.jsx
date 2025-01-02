import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { SlidersHorizontal } from 'lucide-react';

const categories = [
  { name: 'Decoración Del Hogar', count: 7 },
  { name: 'Instalacione Comerciales', count: 15 },
  { name: 'Muebles Personalizados', count: 19 },
  { name: 'Electrodomésticos', count: 6 },
  { name: 'Diseño De Eventos Y Escenografía', count: 21 },
  { name: 'Fabricación Personalizada', count: 21 },
  { name: 'Arte Y Esculturas', count: 21 },
  { name: 'Componentes Para Bricolaje', count: 21 }
];

const Sidebar = () => {
  const [priceRange, setPriceRange] = useState([40, 290]);

  return (
    <div className="w-72 p-4 bg-white">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Filtrar Por Precio</h2>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <Slider
            range
            min={0}
            max={300}
            value={priceRange}
            onChange={(value) => setPriceRange(value)}
            railStyle={{ backgroundColor: '#E5E7EB' }}
            trackStyle={[{ backgroundColor: '#FC7327' }]}
            handleStyle={[
              { 
                borderColor: '#FC7327',
                backgroundColor: '#FC7327',
                opacity: 1,
              },
              {
                borderColor: '#FC7327',
                backgroundColor: '#FC7327',
                opacity: 1,
              }
            ]}
          />
          <div className="flex justify-between mt-2">
            <div className="bg-primary px-3 py-1 rounded-full text-sm flex gap-1 text-white items-center justify-center">
              <p>Filter</p><SlidersHorizontal color='white'/>

            </div>
            <span className="text-sm text-gray-600">
              Price: ${priceRange[0]}-${priceRange[1]}
            </span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-medium mb-4">Categorias</h2>
        <ul className="space-y-3">
          {categories.map((category, index) => (
            <li key={index} className="flex justify-between items-center text-secondary hover:text-primary cursor-pointer">
              <span>{category.name}</span>
              <span className="text-sm text-secondary">({category.count})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;