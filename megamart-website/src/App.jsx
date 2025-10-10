import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Header from './Header/Header';
import AddProduct from './AddProduct/addproduct';
import Home from './Home/home';
import MenCard from './show_men/Men';
import Edit from './Edit/Edit';



function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/AddProduct" element={<AddProduct></AddProduct>} />
        <Route path="/" element={<Home></Home>} />
        <Route path="/MenCard"element={<MenCard></MenCard>}></Route>
        <Route path="/edit-product/:id" element={<Edit></Edit>} />
      </Routes>
    </>
  );
}

export default App;
