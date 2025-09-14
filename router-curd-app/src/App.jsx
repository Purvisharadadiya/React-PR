import { Route, Routes } from "react-router"
import Header from "./component/Header/header"
import Addproduct from "./component/addProduct/addProduct"
import Product from "./component/home/home"
import Editproduct from "./component/Editproduct/Editproduct"

function App() {


  return (
    <>
    <Header></Header>
    <Routes>

      <Route path="/Addproduct" element={<Addproduct></Addproduct>}></Route>
      <Route path="/" element={<Product></Product>}></Route>
      <Route path="/Editproduct/:id" element={<Editproduct></Editproduct>}></Route>
      
    </Routes>
     
    </>
  )
}

export default App
