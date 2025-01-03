import React from 'react'
import HeroSection from '../components/HeroSection'
import RawMaterial from '../components/RawMaterial/RawMaterial'
import VideoSection from '../components/VideoSection'
import ProductCategories from '../components/ProductCategories/ProductCategories'
import FeaturedProducts from '../components/FeaturedProducts'
import FAQ from '../components/FAQ'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className="max-w-[1100px] mx-auto ">
        <main className="max-w-[1100px]">
          <VideoSection />
          <RawMaterial />
          <ProductCategories />
          <FeaturedProducts />
          <FAQ />
        </main>
      </div>
    </>
  )
}

export default HomePage
