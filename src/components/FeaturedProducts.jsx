import React from 'react'
import tableImg from "../assets/images/table.png";
import ProductCard1 from './common/ProductCard1';

const FeaturedProducts = () => {

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="main-heading">Productos</h2>
        <p className="sub-heading">Productos Más Vendidos y Recomendados</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard1 key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;

const products = [
  {
    title: "Home Decor",
    description: "The product description here. Lorem ipsum es...",
    price: "1024.99",
    rentPrice: "239.99"
  },
  {
    title: "Business Installations",
    description: "The product description here. Lorem ipsum es...",
    price: "1024.99", 
    rentPrice: "239.99"
  },
  {
    title: "Custom Furniture",
    description: "The product description here. Lorem ipsum es...",
    price: "1024.99",
    rentPrice: "239.99"
  },
  {
    title: "Appliances",
    description: "The product description here. Lorem ipsum es...",
    price: "1024.99",
    rentPrice: "239.99"
  },
  {
    title: "Event and Set Design",
    description: "The product description here. Lorem ipsum es...",
    price: "1024.99",
    rentPrice: "239.99"
  },
  {
    title: "Custom Fabrication",
    description: "The product description here. Lorem ipsum es...",
    price: "1024.99",
    rentPrice: "239.99"
  },
  {
    title: "Art and Sculptures",
    description: "The product description here. Lorem ipsum es...",
    price: "1024.99",
    rentPrice: "239.99"
  },
  {
    title: "DIY Components",
    description: "The product description here. Lorem ipsum es...",
    price: "1024.99",
    rentPrice: "239.99"
  }
];