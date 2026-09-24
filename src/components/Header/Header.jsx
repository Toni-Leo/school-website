import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
       <section>
        <header>
            <div className="nav-link-text">
              <Link to="/">Home</Link> </div>
            <div className="nav-link-text">
               <Link to="/ContactUs ">Contact Us</Link> </div>
            <div className="nav-link-text">
              <Link to="/AboutUs">About Us</Link> </div>
            <div className="nav-link-text">
              <Link to="/Services">Servies</Link> </div>
        </header>

     </section>
    </div>
  )
}

export default Header;
