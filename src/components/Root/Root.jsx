import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Products from '../Products/Products'
import TopProducts from '../TopProducts/TopProducts'
import Banner from '../Banner/Banner'
import Subscribe from '../Subscribe/Subscribe'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../Footer/Footer'

const Root = () => {

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
        <TopProducts />
        <Banner />
        <Subscribe /> 
        <Products />
        <Testimonials />
        <Footer />     
    </>
  )
}

export default Root
