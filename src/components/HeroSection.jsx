import React from 'react'
import heroImg from "../assets/images/hero-img.png"
import { Box } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import exploreIcon from "../assets/icons/explore.png"
import userSetting from "../assets/icons/user-setting.png"

const HeroSection = () => {
  const navigate = useNavigate();

  const handleExploreProducts = () => {
    navigate('/products')
  }

  return (
    <div className="relative h-[500px]">
      <img
        src={heroImg}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover "
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          ¡Bienvenidos a <span className="text-primary">TallerPR</span>!
        </h1>

        <p className="text-white text-lg md:text-xl max-w-3xl mb-10">
          Desde mueblería y electrodomésticos, hasta la fabricación de productos personalizados
          con materia prima para la renta o compra. Ideal para hogares, negocios y construcción
          de escenarios de cinematografía.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <button onClick={handleExploreProducts} className="bg-transparent border border-white hover:bg-secondary/90 text-white px-6 py-3 rounded-full 
            flex items-center justify-center gap-1">
            <img src={exploreIcon} alt="" width={18} />
            Explorar Productos
          </button>

          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full 
            flex items-center justify-center gap-1">
            <img src={userSetting} alt="" width={20} />
            Encargar Personalización
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;