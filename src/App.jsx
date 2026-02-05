import { useState,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import BeforeLoginNavBar from './Components/BeforeLoginNavBar'
import AfterLoginNavBar from './Components/AfterLoginNavBar'
import HeroSection from './Components/Hero/HeroSection'
import FeatureShowcase from './Components/Features/FeatureShowcase'

function App() {
    const [darkMode, setDarkMode] = useState(true);
 let isLoggedIn = true;
 const user={name:"Sumit"};

 
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <>
     <NavBar
        isLoggedIn={isLoggedIn}
        user={user}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
     <HeroSection/>
     <FeatureShowcase/>

    </>
  )
}

export default App
