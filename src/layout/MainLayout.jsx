import React from 'react'
import HomePage from '../pages/HomePage'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductList from '../pages/ProductList'
import ProductDetail from '../pages/ProductDetail'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout
