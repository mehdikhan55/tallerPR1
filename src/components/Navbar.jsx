import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { Search, ShoppingCart, Heart, Menu, X, SlidersHorizontal } from 'lucide-react'
import exploreIcon from "../assets/icons/explore.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-secondary py-6 text-xs ">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Desktop Nav */}
        <div className="flex items-center justify-between">

          <div className="hidden md:flex flex-col w-full">

            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center w-full ">
                <img src={logo} alt="TallerPR" className="h-8" />
              </div>
              <div className="relative bg-white rounded-full flex">
                <input
                  type="text"
                  placeholder=""
                  className="pl-12 pr-32 py-0 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none w-64 shadow-lg"
                />
                <button className="absolute left-4 top-[25%] ">
                  <Search className="h-6 w-6 text-primary" />
                </button>
                <div className="flex items-center justify-center gap-1 p-1">
                  <button className="bg-primary text-white px-4 py-2 rounded-full flex items-center space-x-2">
                    <Search className="h-5 w-5" />
                    <span>Search</span>
                  </button>
                  <button className="bg-primary text-white p-2 rounded-full">
                    <SlidersHorizontal className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>

              <button className="bg-primary text-white px-4 py-2 rounded-full flex items-center space-x-2">
                <ShoppingCart className="h-5 w-5" />
                <span>Cesta</span>
              </button>

              <button className="bg-primary text-white px-4 py-2 rounded-full flex items-center space-x-2 gap-1">
                <Heart className="h-6 w-6" />
                Favorita
              </button>
            </div>

            <div className="flex justify-between">
              <div className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-white hover:text-primary">Hogar</a>
                <div className="relative group">
                  <a href="#" className="text-white hover:text-primary flex items-center">
                    Categorias Top
                    <span className="ml-1">▾</span>
                  </a>
                </div>
                <a href="#" className="text-white hover:text-primary">Personaliza</a>
              </div>
              <div className="hidden md:flex mt-4">
                <button className="bg-primary text-white px-4 py-2 rounded-full">
                  <span className='flex gap-1 items-center justify-center'>
                    <img src={exploreIcon} alt="" width={18} />
                    <p>Explorar Productos</p>
                  </span>
                </button>
              </div>
            </div>
          </div>


          {/* Mobile menu button */}
          <div className="md:hidden w-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center w-full ">
                <img src={logo} alt="TallerPR" className="h-8" />
              </div>
              <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-white hover:text-primary">Hogar</a>
              <a href="#" className="text-white hover:text-primary">Categorias Top</a>
              <a href="#" className="text-white hover:text-primary">Personaliza</a>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-4 pr-10 py-2 rounded-full bg-white/10 text-white placeholder-gray-400 focus:outline-none"
                />
                <button className="absolute right-3 top-2.5">
                  <Search className="h-5 w-5 text-white" />
                </button>
              </div>

              <button className="bg-primary text-white px-4 py-2 rounded-full flex items-center justify-center space-x-2">
                <ShoppingCart className="h-5 w-5" />
                <span>Cesta</span>
              </button>

              <button className="text-white hover:text-primary flex items-center justify-center">
                <Heart className="h-6 w-6" />
                <span>Favorita</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar