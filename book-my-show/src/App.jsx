import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Header from './componets/header/header'
import Addmovie from './componets/addmovie/addmovie'
import Home from './componets/home/home'

function App() {
  

  return (
    <>
    <Header/>
     <Routes>
      <Route path="/Addmovie" element={<Addmovie/>}></Route>
      <Route path="/" element={<Home></Home>}></Route>
     </Routes>
    </>
  )
}

export default App
