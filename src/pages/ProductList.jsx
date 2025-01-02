import React from 'react';
import { Heart, ShoppingCart, ArrowUpRight } from 'lucide-react';
import Sidebar from "../components/common/Sidebar";
import tableImg from '../assets/images/table.png';
import FAQ from '../components/FAQ';
import { useNavigate } from 'react-router-dom';
import cartPlusIcon from "../assets/icons/cart-plus.png";
import heartPlusIcon from "../assets/icons/heart-plus.png";

const ProductList = () => {

  return (
    <div className="max-w-[1100px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-6">
        <div className="lg:col-span-1">
          <Sidebar />
        </div>
        <div className="lg:col-span-3">
          <div className='pl-4'>
            <div className="flex justify-between items-center mb-2">
              <div className="flex flex-col gap-1">
                <p className='main-heading text-left text-xs mb-0'>Hogar/Decoración del hogar</p>
                <h1 className="text-3xl font-bold text-secondary">Productos</h1>
                <p className='sub-heading mb-0 pb-0'>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed ut.</p>
              </div>
            </div>
            <div className="flex items-center gap-2 justify-between text-xs">
              <span className="text-gray-600">Showing 1-12 of 14 results</span>
              <select className="border rounded-lg px-3 py-2 text-secondary">
                <option>Default sorting</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product,index) => (
                <ProductCard index={index} key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <FAQ alignLeft />
    </div>
  );
};

export default ProductList;


const ProductCard = ({ index, product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/product-details')
  }

  return (
    <div className={`p-[1px] rounded-xl shadow-2xl
      ${index % 2 === 0
        ? 'bg-gradient-to-t from-primary via-primary/30 to-transparent'
        : 'bg-gradient-to-b from-primary via-primary/30 to-transparent'
      }
    `}>
      <div className="bg-white rounded-xl p-4 h-full">
        <div className="relative">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-44 object-cover rounded-lg"
          />
          <button className="absolute top-0 -right-2 p-2 bg-primary rounded-full">
            <img src={cartPlusIcon} alt="" className='w-4 h-4' />
          </button>
          <button className="absolute top-9 -right-2 p-2 bg-primary rounded-full">
            <img src={heartPlusIcon} alt="" className='w-4 h-4' />
          </button>
        </div>

        <div className="mt-1">
          <h3 className="text-md font-semibold text-primary">{product.title}</h3>
          <p className="text-xs text-gray-500">{product.description}</p>
          <div className="mt-1">
            <span className="text-sm font-bold text-secondary">${product.price}</span>
          </div>

          <div className="mt-2 space-y-1">
            <button onClick={handleClick} className="w-full bg-primary text-white py-1 rounded-full flex items-center justify-center gap-1 text-xs">
              <span className="font-semibold">Explorar Más</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="flex flex-col gap-1">
              <button className="flex-1 flex items-center justify-center gap-1 border border-primary text-primary py-1 rounded-full text-xs">
                <span className="font-semibold">Comprar</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className="flex-1 flex items-center justify-center gap-1 border bg-primary text-white py-1 rounded-full text-xs">
                <span className="font-semibold">Rentar</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
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