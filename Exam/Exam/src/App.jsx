
import './App.css'
import { Route, Routes } from 'react-router'
import Header from './Componet/Hader/Hader'
import HOME from './Componet/HOME/Home'
import AddBLOG from './Componet/ADD/addblog.JSX'
import SignIn from './sigin/sigin'
import { signOutAsync } from './service/ation/athencation'
import SignUp from './sigiup/sigiup'

function App() {

  return (
   
    <>

       <Header></Header>
        <Routes>
       <Route path='/' element={<HOME></HOME>} />
        <Route path='/AddBLOG' element={<AddBLOG></AddBLOG>} />
        <Route path="/signIn" element={<SignIn></SignIn>} />
        <Route path="/signUp" element={<SignUp></SignUp>} />
        </Routes>
    </>
  )
}

export default App
