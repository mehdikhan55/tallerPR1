import React from 'react';
import tableImg from "../../assets/images/table.png";
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import cartPlusIcon from "../../assets/icons/cart-plus.png";
import heartPlusIcon from "../../assets/icons/heart-plus.png";

const ProductCard1 = ({ index, title, description, price, rentPrice }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/product-details');
  }

  return (
    <div className={`p-[1px] rounded-xl shadow-2xl 
      ${index % 2 === 0
        ? 'bg-gradient-to-t from-primary via-primary/30 to-transparent'
        : 'bg-gradient-to-b from-primary via-primary/30 to-transparent'
      }
    `}>
      <div className="bg-white rounded-xl py-4 px-3 h-full">
        <div className="relative">
          <img src={tableImg} alt={title} className="w-full h-44 object-cover rounded-lg" />
          <button className="absolute top-0 -right-1 p-2 bg-primary rounded-full">
            <img src={cartPlusIcon} alt="" className='w-4 h-4' />
          </button>
          <button className="absolute top-9 -right-1 p-2 bg-primary rounded-full">
            <img src={heartPlusIcon} alt="" className='w-4 h-4' />
          </button>
        </div>

        <div className="mt-1">
          <h3 className="text-md font-semibold text-primary">{title}</h3>
          <p className="text-xs text-gray-500 ">{description}</p>

          <div className="mt-1">
            <span className="text-sm font-bold text-secondary">${price}</span>
            <div className="text-xs text-primary font-semibold mt-[0.16rem] mb-[0.18rem]">
              Rent Per Day <span className="text-secondary font-semibold">${rentPrice}</span>
            </div>
          </div>

          <div className="mt-2">
            <button onClick={handleClick} className="w-full bg-primary text-white py-1 rounded-full mb-2 flex items-center justify-center text-sm">
              <p>Explorar Más</p> <ArrowUpRight />
            </button>
            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center border border-primary text-primary py-1 rounded-full text-sm">
                <p className='font-semibold'>Comprar </p> <ArrowUpRight />
              </button>
              <button className="flex-1 flex items-center justify-center border border-primary text-primary py-1 rounded-full text-sm">
                <p className='font-semibold'>Rentar </p> <ArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard1;