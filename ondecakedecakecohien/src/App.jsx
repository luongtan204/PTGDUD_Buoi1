import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "tailwindcss"
import {BrowserRouter,Router,Routes,RouterProvider,Route} from "react-router-dom"

import Home from './pages/Home'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import Header from './component/Header'
import Footer from './component/Footer'
import ProductDetail from './component/ProductCard'
function App() {
  
  return (
    <>
    
   
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="menu" element={<Menu />}></Route>
        <Route path="shoppingcart" element={<Cart />} ></Route>
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  )
}

export default App
