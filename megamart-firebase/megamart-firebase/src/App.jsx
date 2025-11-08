import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Header from './Components/Header/Header'
import Addproduct from './Components/AddProduct/Addproduct'
import Home from './Components/Home/Home'
import Men from './Components/Menwear/Men'
import EditProduct from './Components/EditProduct/EditProduct'
import Footer from './Components/Footer/Footer'
import Kidswear from './Components/Kidswear/Kidswear'
import Womenwear from './Components/Womenwear/Womenwear'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Addproduct' element={<Addproduct />} />
        <Route path='editproduct/:id' element={<EditProduct />} />
        <Route path='/Men' element={<Men />} />
        <Route path='/Women' element={<Womenwear></Womenwear>} />
        <Route path='/Kids' element={<Kidswear></Kidswear>} />
        

      </Routes>
      <Footer />
    </>
  )
}

export default App
