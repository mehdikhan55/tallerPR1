import React from 'react';

const ProductCategoryCard = ({ image, title, subtitle }) => (
  <div className="relative group cursor-pointer">
    <div className="rounded-full w-full p-2 flex items-center justify-center border-4 border-primary overflow-hidden aspect-square">
      <div className="relative w-full h-full">
        <div className='relative'>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent rounded-full" />
        </div>
        <div className="absolute bottom-[35%] left-0 right-0 text-center text-white">
          <h3 className="font-bold text-lg">{title}</h3>
          {subtitle && <p className="text-sm">{subtitle}</p>}
        </div>
      </div>
    </div>
  </div>
 );

export default ProductCategoryCard;