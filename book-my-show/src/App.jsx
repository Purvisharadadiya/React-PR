import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Header from './componets/header/header'
import Addmovie from './componets/addmovie/addmovie'

function App() {
  

  return (
    <>
    <Header/>
     <Routes>
      <Route path="/Addmovie" element={<Addmovie/>}></Route>
      
     </Routes>
    </>
  )
}

export default App
