import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <div className="min-h-7xl bg-white font-gilroy">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path='/product-details' element={<ProductDetail/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App