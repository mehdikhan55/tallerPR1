import React from 'react'
import {image2,image3,image4,image5,image6,image10,image11,image12} from "./index"
import ProductCategoryCard from './ProductCategoryCard';

const ProductCategories = () => {

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="main-heading">Todos los Productos</h2>
        <p className="sub-heading">
          Explora toda nuestra colección de
          <br />
          productos por categorías.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {categories.map((category, index) => (
          <ProductCategoryCard
            key={index}
            {...category}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;

const categories = [
  {
    image: image2,
    title: "Decoración",
    subtitle: "Del Hogar"
  },
  {
    image: image3,
    title: "Instalaciones",
    subtitle: "Comerciales"
  },
  {
    image: image4,
    title: "Muebles",
    subtitle: "Personalizados"
  },
  {
    image: image5,
    title: "Electrodomésticos",
    subtitle: null
  },
  {
    image: image6,
    title: "Diseño De Eventos",
    subtitle: "Y Escenografía"
  },
  {
    image: image10,
    title: "Fabricación",
    subtitle: "Personalizada"
  },
  {
    image: image11,
    title: "Arte Y",
    subtitle: "Esculturas"
  },
  {
    image: image12,
    title: "Componentes",
    subtitle: "Para Bricolaje"
  }
];