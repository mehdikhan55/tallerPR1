import React, { useState } from 'react';
import { PlayCircle, ShoppingCart, ZoomIn } from 'lucide-react';
import tableImg from '../assets/images/table.png';
import ProductCard1 from '../components/common/ProductCard1';
import { image2, image3, image4, image5, image6, image10, image11, image12 } from "../components/ProductCategories/index";
import FAQ from '../components/FAQ';

const ProductDetail = () => {
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(5);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Product Image Section */}
        <div className="relative">
          <div className="bg-white rounded-lg p-6 shadow-2xl border border-primary">
            <img 
              src={tableImg}
              alt="Product"
              className="w-full h-auto rounded-lg "
            />
            <div className="absolute top-8 left-8 flex gap-2">
              <span className="bg-primary text-white px-4 py-2 rounded-full text-sm">
                Venta!
              </span>
              <button className="bg-primary text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
                <PlayCircle className="w-4 h-4" />
                Ver Video
              </button>
            </div>
            <button className="absolute bottom-8 right-8 bg-primary text-white p-2 rounded-full">
              <ZoomIn />
            </button>
          </div>
        </div>

        {/* Product Info Section */}
        <div>
          <h1 className="text-4xl font-bold text-primary mb-4">Home Decor</h1>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-gray-500 line-through">$1024.99</span>
            <span className="text-2xl font-bold text-secondary">$924.99</span>
          </div>
          <div className="text-primary font-medium mb-6">
            Rent Per Day <span className="text-secondary">$299.99</span>
          </div>

          <p className="text-gray-600 mb-8">
            Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
            vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Mauris in
            erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a
            augue. Sed non neque elit sed.
          </p>

          <div className="flex items-center gap-4 mb-8">
            {/* <div className="flex items-center border rounded-full">
              <button
                className="px-4 py-2 text-primary"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                className="px-4 py-2 text-primary"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button> */}
            <div className="flex items-center border rounded-full gap-2">
              <span className="px-4 py-2 border border-primary rounded-full">{quantity}</span>
              <span className='flex items-center justify-center p-2 px-4 bg-primary rounded-full gap-1 text-white '>
                <ShoppingCart/>
                <p>Añadir a la cesta</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-12 mb-10">
        <div className="border-b border-gray-200">
          <div className="flex gap-8">
            <button
              className={`pb-4 px-1 ${activeTab === 'description'
                ? 'border-b-2 border-primary text-primary'
                : 'text-gray-500'
                }`}
              onClick={() => setActiveTab('description')}
            >
              Descripción Completa
            </button>
            <button
              className={`pb-4 px-1 ${activeTab === 'reviews'
                ? 'border-b-2 border-primary text-primary'
                : 'text-gray-500'
                }`}
              onClick={() => setActiveTab('reviews')}
            >
              Reseñas (100)
            </button>
          </div>
        </div>

        <div className="py-8">
          {activeTab === 'description' ? (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-secondary mb-4">
                Descripción del Producto
              </h2>
              <p className="text-gray-600">
                Since it's creation lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
              <p className="text-gray-600">
                Since it's creation lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          ) : (
            <div className="text-gray-600">
              <p>No hay reseñas todavía.</p>
            </div>
          )}
        </div>
      </div>

      <h2 className='main-heading'>Producto relacionado</h2>
      <p className='sub-heading'>Explore Similar Options You Might Like</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard1 key={index} {...product} />
        ))}
      </div>

      <h2 className='main-heading mt-20'>Todos los Productos</h2>
      <p className='sub-heading'>Explora toda nuestra colección de productos por categorías.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
        {categories.map((category, index) => (
          <ModifiedProductCategoryCard
            key={index}
            {...category}
            index={index}
          />
        ))}
      </div>

      <FAQ alignLeft/>

    </div>
  );
};

export default ProductDetail;

const ModifiedProductCategoryCard = ({ image, title, subtitle, index }) => (
  <div className={`bg-white rounded-2xl p-[1px] shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden
    ${index % 2 === 0
      ? 'bg-gradient-to-t from-primary/70 via-primary/30 to-transparent'
      : 'bg-gradient-to-b from-primary/70 via-primary/30 to-transparent'
    }`}>
    <div className="bg-white rounded-2xl p-4">
      <div className="flex items-center gap-4">
        <div className="relative w-20 h-20 flex-shrink-0">
          <div className="rounded-full w-full h-full p-1 flex items-center justify-center border-2 border-primary overflow-hidden">
            <div className="relative w-full h-full">
              <div className="relative rounded-full overflow-hidden ">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-primary font-medium">
            {title}
            {subtitle && (
              <>
                <br />
                <span>{subtitle}</span>
              </>
            )}
          </h3>
        </div>
      </div>
    </div>
  </div>
);


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
  }
]

const categories = [
  {
    image: image2,
    title: "Decoración Del",
    subtitle: "Hogar"
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
    title: "Componentes Para",
    subtitle: "Bricolaje"
  }
];