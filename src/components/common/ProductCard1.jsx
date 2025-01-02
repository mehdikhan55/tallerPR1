import React from 'react';
import tableImg from "../../assets/images/table.png";
import { ArrowUpRight, Heart, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductCard1 = ({ title, description, price, rentPrice }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/product-details');
  }

    return (
      <div className="bg-white rounded-lg p-6 shadow-2xl">
        <div className="relative">
          <img src={tableImg} alt={title} className="w-full h-48 object-cover rounded-lg" />
          <button className="absolute top-2 right-2 p-2 bg-primary rounded-full">
            <ShoppingCart className="w-5 h-5 text-white" />
          </button>
          <button className="absolute top-14 right-2 p-2 bg-primary rounded-full">
            <Heart className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold text-primary">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">{description}</p>

          <div className="mt-3">
            <span className="text-lg font-bold text-secondary">${price}</span>
            <div className="text-sm text-primary font-semibold">
              Rent Per Day <span className="text-secondary font-semibold">${rentPrice}</span>
            </div>
          </div>

          <div className="mt-4">
            <button onClick={handleClick} className="w-full bg-primary text-white py-2 rounded-full mb-3 flex items-center justify-center">
              <p>Explorar Más</p> <ArrowUpRight />
            </button>
            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center border border-primary text-primary py-2 rounded-full">
                <p className='font-semibold'>Comprar </p> <ArrowUpRight />
              </button>
              <button className="flex-1 flex items-center justify-center border border-primary text-primary py-2 rounded-full">
                <p className='font-semibold'>Rentar </p> <ArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default ProductCard1;