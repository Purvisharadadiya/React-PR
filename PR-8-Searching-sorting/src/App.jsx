import { Route, Routes } from "react-router"
import Header from "./component/Header/Header"
import Addmoive from "./component/Addmoive/Addmoive"
import Home from "./component/Homepage/Homepage"
import Editmoive from "./component/Editmoive/Editmoive"



function App() {


  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<h1>About</h1>}></Route>
        <Route path='/Addmoive' element={<Addmoive></Addmoive>}></Route>
        <Route path='/Editmoive/:id' element={<Editmoive />}></Route>
      </Routes>

    </>
  )
}

export default App
