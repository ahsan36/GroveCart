import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Products />
    </>
  )
}

export default App
