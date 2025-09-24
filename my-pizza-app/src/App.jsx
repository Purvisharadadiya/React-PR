import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CRAD from './componets/card/card'
import Banner from './componets/Baneer/banner'
import Header from './componets/Header/Header'
import Footer from './componets/Footer/Footer'


function App() {
  

  return (
    <>
    <Header></Header>
   <Banner></Banner>
   <CRAD/>
   <Footer></Footer>
    </>
  )
}

export default App
