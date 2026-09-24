import React from 'react'
// import cardimg from "./assets/student2.jpg";
// import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Testimony from '../components/Testimony/Testimony';
import Cta from '../components/Cta/Cta';
// import Footer from '../components/Footer/Footer';

const LandingPageScreens = () => {
  return (
    <div>
      {/* <Header/> */}
      <Hero/>
      <About/>
      <Testimony/>
      <Cta/> 
      {/* <Footer/> */}
    </div>
  )
}

export default LandingPageScreens
