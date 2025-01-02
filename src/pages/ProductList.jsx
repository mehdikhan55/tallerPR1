import React from 'react';
import { Heart, ShoppingCart, ArrowUpRight } from 'lucide-react';
import Sidebar from "../components/common/Sidebar";
import tableImg from '../assets/images/table.png';
import FAQ from '../components/FAQ';
import { useNavigate } from 'react-router-dom';


const ProductList = () => {

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        <div className="lg:col-span-1">
          <Sidebar />
        </div>
        <div className="lg:col-span-3">
          <div>
            <div className="flex justify-between items-center mb-6">
              <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold text-secondary">Productos</h1>
                <p className='sub-heading'>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed ut.</p>
              </div>
            </div>
            <div className="flex items-center gap-2 justify-between">
              <span className="text-gray-600">Showing 1-12 of 14 results</span>
              <select className="border rounded-lg px-3 py-2 text-secondary">
                <option>Default sorting</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <FAQ />
    </div>
  );
};

export default ProductList;


const ProductCard = ({ product }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/product-details')
  }

  return (
    <div className="bg-white rounded-lg p-4 shadow-2xl">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <button className="absolute top-2 right-2 p-2 bg-primary rounded-full">
          <ShoppingCart className="w-5 h-5 text-white" />
        </button>
        <button className="absolute top-14 right-2 p-2 bg-primary rounded-full">
          <Heart className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-semibold text-primary">{product.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.description}</p>
        <div className="mt-3">
          <span className="text-lg font-bold text-secondary">${product.price}</span>
        </div>

        <div className="mt-4 space-y-2">
          <button onClick={handleClick} className="w-full bg-primary text-white py-2 rounded-full flex items-center justify-center gap-1">
            <span className="font-semibold">Explorar Más</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <div className="flex flex-col gap-2">
            <button className="flex-1 flex items-center justify-center gap-1 border border-primary text-primary py-2 rounded-full">
              <span className="font-semibold">Comprar</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button className="flex-1 flex items-center justify-center gap-1 border  bg-primary text-white py-2 rounded-full">
              <span className="font-semibold">Rentar</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sample product data
const products = [
  {
    id: 1,
    title: "Home Decor",
    description: "The product description here. Lorem Ipsum es..",
    price: "1024.99",
    image: tableImg
  },
  {
    id: 2,
    title: "Business Installations",
    description: "The product description here. Lorem Ipsum es..",
    price: "1024.99",
    image: tableImg
  },
  {
    id: 3,
    title: "Custom Furniture",
    description: "The product description here. Lorem Ipsum es..",
    price: "1024.99",
    image: tableImg
  },
  {
    id: 4,
    title: "Home Decor",
    description: "The product description here. Lorem Ipsum es..",
    price: "1024.99",
    image: tableImg
  },
  {
    id: 5,
    title: "Business Installations",
    description: "The product description here. Lorem Ipsum es..",
    price: "1024.99",
    image: tableImg
  },
  {
    id: 6,
    title: "Custom Furniture",
    description: "The product description here. Lorem Ipsum es..",
    price: "1024.99",
    image: tableImg
  }
];