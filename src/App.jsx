import React from "react"
import LandingPageScreens from "./Screens/LandingPageScreens";
import ContactUs from "./Screens/ContactUs"
import AboutUs from "./Screens/AboutUs";
import Services from "./Screens/Services";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <div>
      <Header/>
     
      <Routes>
        <Route path="/" element={<LandingPageScreens/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Services" element={<Services/>}/>

      </Routes>
      <Footer/>
    </div>
  );
};

export default App
