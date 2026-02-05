import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import BeforeLoginNavBar from './Components/BeforeLoginNavBar'
import AfterLoginNavBar from './Components/AfterLoginNavBar'

function App() {
 let isLoggedIn = true;
 const user={name:"Sumit"};

  return (
    <>
     <NavBar isLoggedIn={isLoggedIn} user={user}/>

    </>
  )
}

export default App
