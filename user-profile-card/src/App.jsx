import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfileCard from './componets/User_card'

function App() {


  return (
    <>
     <div className="card-container">
      <UserProfileCard
        name="João Russo"
        age={20}
        email="joao.russo@example.com"
        profilePicture="https://images.unsplash.com/photo-1600884655623-7ba8d601f3d1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        followers="80K"
        likes="803K"
        photos="1.4K"
        articles="50"
        jobTitle="Software Developer"
        location="Brazil"
      />
      <UserProfileCard
        name="piya rawal"
        age={18}
        email="piya.rawal@example.com"
        profilePicture="https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        followers="70K"
        likes="903K"
        photos="1.4K"
        articles="90"
        jobTitle="web Developer"
        location="rajkot"
      />
      <UserProfileCard
        name="Ashvi rathod"
        age={22}
        email="Ashvi.rathod@example.com"
        profilePicture="https://images.unsplash.com/photo-1597155844518-1b4b3daf8269?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        followers="90K"
        likes="203K"
        photos="1.4K"
        articles="40"
        jobTitle="UI Developer"
        location="surat"
      />
      </div>
    </>
  )
}

export default App
